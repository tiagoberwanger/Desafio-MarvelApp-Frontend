import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import api from '../services/api';
const favComics = [];
const favCharacters = [];

function Register () {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error400, setError400] = useState('');
  const [error409, setError409] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    const bodyObj = {
      username,
      email,
      password
    }
    api
    .post('/register', bodyObj)
      .then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data.token))
        localStorage.setItem('user', JSON.stringify({username, email}))
        localStorage.setItem('favComics', JSON.stringify(favComics))
        localStorage.setItem('favCharacters', JSON.stringify(favCharacters))
        history.push('/home');
      })
      .catch((err) =>{
        console.log(err.message);
        // if (err && err.response.status === 400) {
        //   setError400('Regras inválidas!')
        // }
        // if (err && err.response.status === 409) {
        //   setError409('Email já foi cadastrado!')
        // }
      })
  }

  return (
    <div className="container p-3 text-center">
      <Form className="mt-5">
        <Form.Group className='col-lg-offset-12'>
          {/* <Form.Label htmlFor="username-input">Nome</Form.Label> */}
          <Form.Control size="lg" type="username" className="bg-light" placeholder="Digite seu nome" onChange={(e) => setUsername(e.target.value)} />
          <Form.Text id="username-help" className="font-weight-bold text-dark">Deve ter no mínimo 8 caracteres</Form.Text>
        </Form.Group>
        <Form.Group className='col-lg-offset-12'>
          {/* <Form.Label htmlFor="email-input">Email</Form.Label> */}
          <Form.Control size="lg" type="email" placeholder="Digite seu email" className="bg-light" onChange={(e) => setEmail(e.target.value)} />
          <Form.Text id="email-help" className="font-weight-bold text-dark">Deve ser um email válido</Form.Text>
        </Form.Group>
        <Form.Group className='col-lg-offset-12'>
          {/* <Form.Label htmlFor="password-input">Senha</Form.Label> */}
          <Form.Control size="lg" type="password" placeholder="Digite sua senha" className="bg-light" onChange={(e) => setPassword(e.target.value)} />
          <Form.Text id="password-help" className="font-weight-bold text-dark">Deve ter no mínimo 6 caracteres</Form.Text>
          <Form.Text id="error-400" className="font-weight-bold text-danger">{error400}</Form.Text>
          <Form.Text id="error-409" className="font-weight-bold text-danger">{error409}</Form.Text>
        </Form.Group>
        <ButtonGroup size="lg" vertical>
          <Button variant='info' onClick={(e) => handleClick(e)} >Registrar</Button>
        </ButtonGroup>
      </Form>
    </div>
  );
};

export default Register;

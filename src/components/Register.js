import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import api from '../services/api';

function Register () {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

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
        history.push('/home');
      })
      .catch((err) =>{
        console.log(err.message);
        // if (err.response.status === // statuscode) {
        //   setError(//error)
        //   console.log(//error)
        // }
      })
  }

  return (
    <div className="container mt-5 p-5 text-center">
      <h1>Marvel App</h1>
      <Form className="mt-5">
        <Form.Group className='col-lg-offset-12'>
          <Form.Label htmlFor="username-input">Nome</Form.Label>
          <Form.Control type="username" placeholder="Digite seu nome" onChange={(e) => setUsername(e.target.value)} />
          <Form.Text id="username-help" className="text-muted">Deve ter no mínimo 8 caracteres</Form.Text>
        </Form.Group>
        <Form.Group className='col-lg-offset-12'>
          <Form.Label htmlFor="email-input">Email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
          <Form.Text id="email-help" className="text-muted">Deve ser um email válido</Form.Text>
        </Form.Group>
        <Form.Group className='col-lg-offset-12'>
          <Form.Label htmlFor="password-input">Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
          <Form.Text id="password-help" className="form-text text-muted">Deve ter no mínimo 6 caracteres</Form.Text>
        </Form.Group>
        <ButtonGroup size="lg" vertical>
          <Button variant='info' onClick={(e) => handleClick(e)} >Registrar</Button>
        </ButtonGroup>
      </Form>
    </div>
  );
};

export default Register;

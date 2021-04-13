import React, { useState, useEffect } from 'react';
import { Form, Button, ButtonGroup, Image } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import api from '../services/api';
const favComics = [];
const favCharacters = [];

function Login () {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  })

  const handleClick = (e) => {
    e.preventDefault();
    const bodyObj = {
      email,
      password
    }

    try {
      api
        .post('/login', bodyObj)
        .then((response) => {
          localStorage.setItem('token', JSON.stringify(response.data.token))
          localStorage.setItem('user', JSON.stringify({email}))
          localStorage.setItem('favComics', JSON.stringify(favComics))
          localStorage.setItem('favCharacters', JSON.stringify(favCharacters))
          history.push('/home');
        })
        .catch((err) =>{
          if (err && err.response.status === 400) {
            setError('Usuário não cadastrado!')
          }
        })
    } catch (err) {
      console.log(err.message)
    }
   
  }

  return (
    <div className="container bg-light">
      <div className="text-center vh-100 p-3">
        <Image className="pt-3 img-responsive" src='marvel-logo.png' thumbnail />
        <Form>
        <Form.Group className='col-lg-offset-12'>
          <Form.Label column="lg" htmlFor="email-input">Email</Form.Label>
          <Form.Control size="lg" type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
          <Form.Text id="email-help" className="text-muted">Deve ser um email válido</Form.Text>
        </Form.Group>
          <span>{error}</span>
        <Form.Group className='col-lg-offset-12'>
          <Form.Label column="lg" htmlFor="password-input">Senha</Form.Label>
          <Form.Control size="lg" type="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
          <Form.Text id="password-help" className="form-text text-muted">Deve ter no mínimo 6 caracteres</Form.Text>
        </Form.Group>
        <ButtonGroup size="lg" vertical>
          <Button variant='dark' className='mb-1' onClick={(e) => handleClick(e)}>Entrar</Button>
          <Link to='/register'>
            <Button type="button" variant='secondary'>Ainda não tenho conta</Button>
          </Link>
        </ButtonGroup>
      </Form>
      </div>
      <footer className="blockquote-footer text-center">
        <small className="text-muted">
          Desenvolvido por <cite title="Source Title">Tiago Berwanger </cite>
        </small>
      </footer>
    </div>
  );
};

export default Login;
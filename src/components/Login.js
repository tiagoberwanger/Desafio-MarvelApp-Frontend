import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
const axios = require('axios');

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
    try {
      axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        headers: {'Content-Type': 'application/json'}, 
        data: {
           email: email,
           password: password
        }
      })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem('token', JSON.stringify(response.data.token))
          localStorage.setItem('user', JSON.stringify({email}))
          history.push('/home');
        })
        .catch((err) =>{
          if (err && err.response.status === 400) {
            setError('Usuário não cadastrado!')
            console.log('Usuário não cadastrado!')
          }
        })
    } catch (err) {
      console.log(err.message)
    }
   
  }

  return (
    <div className="container">
        <form>
        <h1>Marvel App</h1>
        <div className="form-group">
          <label htmlFor="email-input">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email-input" aria-describedby="email-help" placeholder="Digite seu email" />
          <small id="email-help" className="form-text text-muted">Deve ser um email válido</small>
          <span>{error}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password-input">Senha</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password-input" aria-describedby="password-help" placeholder="Digite sua senha" />
          <small id="password-help" className="form-text text-muted">Deve ter no mínimo 6 caracteres</small>
        </div>
        <button onClick={(e) => handleClick(e)} className="btn btn-primary">Entrar</button>
        <Link to='/register'>
          <button type="button" className="btn btn-secondary">Ainda não tenho conta</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const axios = require('axios');

function Register () {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3001/user',
      headers: {'Content-Type': 'application/json'}, 
      data: {
        username: username,
        email: email,
        password: password
      }
    })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('token', JSON.stringify(response.data.token))
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
    <div className="container">
        <form>
        <h1>Marvel App</h1>
        <div className="form-group">
          <label htmlFor="username-input">Nome</label>
          <input onChange={(e) => setUsername(e.target.value)} type="username" className="form-control" id="username-input" aria-describedby="username-help" placeholder="Digite seu nome" />
          <small id="username-help" className="form-text text-muted">Deve ter no mínimo 8 caracteres</small>
        </div>
        <div className="form-group">
          <label htmlFor="email-input">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email-input" aria-describedby="email-help" placeholder="Digite seu email" />
          <small id="email-help" className="form-text text-muted">Deve ser um email válido</small>
        </div>
        <div className="form-group">
          <label htmlFor="password-input">Senha</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password-input" aria-describedby="password-help" placeholder="Digite sua senha" />
          <small id="password-help" className="form-text text-muted">Deve ter no mínimo 6 caracteres</small>
        </div>
        <button onClick={(e) => handleClick(e)} className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
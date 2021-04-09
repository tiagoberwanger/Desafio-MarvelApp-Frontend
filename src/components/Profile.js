import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Profile () {
  const [profileName, setProfileName] = useState('');
  const [profileEmail, setProfileEmail] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setProfileName(user.username);
    setProfileEmail(user.email);
  }, [])

  return (
    <div id="container" className="container-fluid">
      <Link to='home'>Voltar</Link>
      <div className="d-flex align-items-center justify-content-center">
        <div>
          <h1 className="m-5">Perfil</h1>
          <h3 className="m-3">Nome: {profileName ? profileName : 'Nome não cadastrado'}</h3>
          <h3 className="m-3">Email: {profileEmail}</h3>
        </div>
      </div>
    </div>
  );
}

export default Profile;
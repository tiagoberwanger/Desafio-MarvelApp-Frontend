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
    <div className="container pt-2 pb-5 mt-5">
      <Link to='home'>
        <h5>Voltar</h5>
      </Link>
      <div className="text-center">
        <div>
          <h1 className="mb-5">Perfil</h1>
          <h5>Nome: {profileName ? profileName : 'Nome não cadastrado'}</h5>
          <h5>Email: {profileEmail}</h5>
        </div>
      </div>
    </div>
  );
}

export default Profile;
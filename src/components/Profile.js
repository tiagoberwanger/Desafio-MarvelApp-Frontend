import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Button, ButtonGroup } from 'react-bootstrap' 

function Profile () {
  const history = useHistory();
  const [profileName, setProfileName] = useState('');
  const [profileEmail, setProfileEmail] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setProfileName(user.username);
    setProfileEmail(user.email);
  }, [])

  const handlefavComics = () => {
    history.push('/profile/fav-comics')
  }  
  const handlefavCharacters = () => {
    history.push('/profile/fav-characters')
  }

  return (
    <div  className="container">
      <Link to='home'>
        <h5>Voltar</h5>
      </Link>
      <div className="text-center">
        <div>
          <h1 className="mb-5">Perfil</h1>
          <h5>Nome: {profileName ? profileName : 'Nome não cadastrado'}</h5>
          <h5>Email: {profileEmail}</h5>
          <ButtonGroup size="lg">
            <Button className="m-4" variant='warning' onClick={() => handlefavComics()}>Favorite Comics</Button>
            <Button className="m-4" variant='warning' onClick={() => handlefavCharacters()}>Favorite Characters</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default Profile;
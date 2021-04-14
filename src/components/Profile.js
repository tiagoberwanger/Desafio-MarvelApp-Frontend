import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup } from 'react-bootstrap'
import { faStar as blackStarButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Back from '../design/Back'

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
      <Back path='home' />
      <div className="text-center">
        <div>
          <h1 className="mb-5">Perfil</h1>
          <h5>Nome: {profileName ? profileName : 'Nome não cadastrado'}</h5>
          <h5>Email: {profileEmail}</h5>
          <ButtonGroup size="lg">
            <Button className="m-4 rounded" variant='warning' onClick={() => handlefavComics()}
            >
              <FontAwesomeIcon icon={blackStarButton} />{' '}Comics
            </Button>
            
            <Button className="m-4 rounded" variant='warning' onClick={() => handlefavCharacters()}
            >
              <FontAwesomeIcon icon={blackStarButton} />{' '}Characters
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default Profile;
import React from 'react';
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup } from 'react-bootstrap' 

function Home () {
  const history = useHistory();

  const handleProfile = () => {
    history.push('/profile')
  }
  const handleComics = () => {
    history.push('/comics')
  }  
  const handleCharacters = () => {
    history.push('/characters')
  }

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="container">
      <div className='text-center p-5'>
      <h1 className='text-center text-black font-weight-bold mb-5'>Homepage</h1>
        <ButtonGroup size="lg" vertical>
          <Button className="mb-5" variant='secondary' onClick={() => handleProfile()}>Perfil</Button>
          <Button className="mb-3" variant='dark' onClick={() => handleComics()}>Comics</Button>
          <Button className="mb-3" variant='dark' onClick={() => handleCharacters()}>Characters</Button>
          <Button className="mt-5" variant='danger' onClick={() => handleLogout()}>Sair</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Home;
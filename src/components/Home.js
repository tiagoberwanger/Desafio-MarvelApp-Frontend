import React from 'react';
import { useHistory } from 'react-router-dom'

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
    <div className='container bg-light'>
      <h1 className='text-center text-black my-5'>Marvel App</h1>
        <div className='text-center'>
          <button onClick={() => handleProfile()} type='button' className='btn-lg btn btn-dark my-3'>Perfil</button>
          <div className='d-flex justify-content-center'>
            <button onClick={() => handleComics()} type='button' className='btn-lg btn btn-dark p-3 mr-3 my-3'>Comics</button>
            <button onClick={() => handleCharacters()} type='button' className='btn-lg btn btn-dark p-3 my-3 ml-3'>Characters</button>
          </div>
          <div className="my-5">
            <button onClick={() => handleLogout()} type='button' className='btn-lg btn btn-dark my-3'>Sair</button>
          </div>
        </div>
    </div>
  );
}

export default Home;
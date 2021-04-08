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

  return (
    <div className='container bg-light'>
      <h1 className='text-center text-black my-5'>Marvel App</h1>
        <div className='d-flex justify-content-center'>
          <div className='btn-group-vertical my-3'>
            <button onClick={() => handleProfile()} type='button' className='btn-lg btn btn-dark my-3'>Perfil</button>
            <button onClick={() => handleComics()} type='button' className='btn-lg btn btn-dark my-3'>Comics</button>
            <button onClick={() => handleCharacters()} type='button' className='btn-lg btn btn-dark my-3'>Characters</button>
          </div>
        </div>
    </div>
  );
}

export default Home;
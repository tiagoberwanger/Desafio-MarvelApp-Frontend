import React from 'react';
import { Link } from 'react-router-dom'

function FavCharacters() {
  return (
    <div className='container'>
      <Link to='home'>
        <h5>Voltar</h5>
      </Link>
      <div className="text-center">
        favorite char
      </div>
    </div>
  );
}

export default FavCharacters;
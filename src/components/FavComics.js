import React from 'react';
import { Link } from 'react-router-dom'

function FavComics() {
  return (
    <div className='container'>
      <Link to='home'>
        <h5>Voltar</h5>
      </Link>
      <div className="text-center">
        favorite comics
      </div>
    </div>
  );
}

export default FavComics;
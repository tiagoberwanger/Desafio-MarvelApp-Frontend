import React from 'react';
import { Image } from 'react-bootstrap';
import Back from '../components/Back';

function Notfound() {
  return (
    <div>
      <Back path='home' />
      <div className="text-center mt-3">
      <h2>Página não encontrada</h2>
        <Image src="https://i.pinimg.com/originals/68/34/e6/6834e60b6e5ab93615e7b78822666eb3.gif" className='vh-100 vw-100' />
      </div>
      </div>
  );
}

export default Notfound;
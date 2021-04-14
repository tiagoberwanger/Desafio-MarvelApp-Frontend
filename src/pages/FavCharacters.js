import React, { useState, useEffect } from 'react';
import { CardColumns } from 'react-bootstrap';
import Loading from '../components/Loading';
import Back from '../components/Back';
import Cards from '../components/Card';

function FavCharacters() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState({});

  useEffect(() => {
    setLoading(true);
    setCards(JSON.parse(localStorage.getItem('favCharacters')))
    setLoading(false);
  }, [])

  return (
    loading ? <Loading /> : (
    <div className='container'>
      <Back path='profile' />
      <h1 className='text-center text-black font-weight-bold'>Characters Favoritos</h1>
      <div className="text-center">
      <div className="column">
      <CardColumns>
      {cards && cards.map((card, index) => <Cards card={card} index={index} /> )}
      </CardColumns>
      </div>
      </div>
    </div>
  ));
}

export default FavCharacters;
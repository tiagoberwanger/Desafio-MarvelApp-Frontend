import React, { useState, useEffect } from 'react';
import { Button, CardColumns, InputGroup, FormControl } from 'react-bootstrap';
import Loading from '../components/Loading'
import Back from '../components/Back'
import Cards from '../components/Card'
import api from '../services/api';

function Characters () {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    api
      .get('/characters')
      .then((response) => {
        console.log(response.data)
        setCards(response.data);
        setLoading(false);
      })
      .catch((err) =>{
        console.log(err.message);
      })
  }, [])

  const handleSearch = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(searchTerm)
    try {
      api
        .get(`/characters/search?q=${searchTerm}`)
        .then((response) => {
          console.log(response.data)
          setCards(response.data);
          setLoading(false);
        })
        .catch((err) =>{
          console.log(err.message);
        })
    } catch (err) {
        console.log(err.message)
    }
  }

  return (
    loading ? <Loading /> : (
      <div className="container min-vh-100">
        <Back path='home' />
        <h1 className='text-center text-black font-weight-bold'>Characters</h1>
        <InputGroup className="mb-3">
          <FormControl
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="procurar por nome"
          />
          <InputGroup.Append>
            <Button
              onClick={(e) => handleSearch(e)}
              variant="light"
            >
              Procurar
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <div className="column">
         <CardColumns>
          {cards.map((card, index) => <Cards card={card} index={index} /> )}
         </CardColumns>
        </div>
      </div>
  ));
}

export default Characters;
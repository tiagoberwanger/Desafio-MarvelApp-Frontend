import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, Button, CardColumns, InputGroup, FormControl } from 'react-bootstrap';
import api from '../services/api';

function Characters () {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    api
      .get('/characters')
      .then((response) => {
        setCharacters(response.data);
        setLoading(false);
      })
      .catch((err) =>{
        console.log(err.message);
      })
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm)
    try {
      api
        .get(`/characters/search?q=${searchTerm}`)
        .then((response) => {
          console.log(response.data.data.results)
          setCharacters(response.data.data.results);
        })
        .catch((err) =>{
          console.log(err.message);
        })
    } catch (err) {
        console.log(err.message)
    }
  }

  return (
    loading ? <p>Loading...</p> : (
      <div className="container min-vh-100">
      <Link to='/home'>
        <h5>Voltar</h5>
      </Link>
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
          {characters.map((character, index) => {
              return (
                <Card key={`${index}-card-main-div`} style={{ width: '18rem' }} className='card w-100 border border-dark rounded'>
                  <Card.Img key={`${index}-card-thumb`} variant="top" src={character.thumbnail.path+'.'+character.thumbnail.extension} />
                  <Card.Body key={`${index}-card-div`}>
                    <Card.Title key={`${index}-card-title`}>{character.name}</Card.Title>
                      <Button onClick={() => history.push(`/characters/${character.id}`)} className="btn btn-dark" variant="primary">Detalhes</Button>
                  </Card.Body>
                </Card>
              )
              })}
         </CardColumns>
        </div>
      </div>
  ));
}

export default Characters;
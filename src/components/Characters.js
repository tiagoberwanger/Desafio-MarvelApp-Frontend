import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, Button, CardColumns } from 'react-bootstrap';
import api from '../services/api';

function Characters () {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState(true);

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

  return (
    loading ? <p>Loading...</p> : (
      <div className="container mt-5 min-vh-100">
      <Link to='/home'>
        <h5>Voltar</h5>
      </Link>
        <h1 className='text-center text-black'>Characters</h1>
        <div className="column ml-3">
         <CardColumns>
          {characters.map((character, index) => {
              return (
                <Card key={`${index}-card-main-div`} style={{ width: '18rem' }}>
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
import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { Card, Button, CardColumns } from 'react-bootstrap';

function FavCharacters() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    setLoading(true);
    setCharacters(JSON.parse(localStorage.getItem('favCharacters')))
    setLoading(false);
  }, [])

  return (
    loading ? <p>Loading...</p> : (
    <div className='container'>
      <Link to='/home'>
        <h5>Voltar</h5>
      </Link>
      <h1 className='text-center text-black font-weight-bold'>Characters Favoritos</h1>
      <div className="text-center">
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
    </div>
  ));
}

export default FavCharacters;
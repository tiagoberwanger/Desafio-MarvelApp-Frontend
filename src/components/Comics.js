import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { Card, Button, CardColumns } from 'react-bootstrap';
import api from '../services/api';

function Comics () {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get('/comics')
      .then((response) => {
        setComics(response.data)
        setLoading(false);
      })
      .catch((err) =>{

        console.log(err.message);
      })
  }, [])

  return (
    loading ? <p>Loading...</p> : (
    <div className="container mt-5 min-vh-100">
      <Link to='home'>
        <h5>Voltar</h5>
      </Link>
      <h1 className='text-center text-black'>Comics</h1>
      <div className="row ml-3">
      <CardColumns>
        {comics.map((comic, index) => {
          return (
            <Card key={`${index}-card-main-div`} style={{ width: '18rem' }}>
              <Card.Img key={`${index}-card-thumb`} variant="top" src={`${comic.thumbnail.path}.jpg`} />
              <Card.Body key={`${index}-card-div`}>
                <Card.Title key={`${index}-card-title`}>{comic.title}</Card.Title>
                  <Button onClick={() => history.push(`/comics/${comic.id}`)} className="btn btn-dark" variant="primary">Detalhes</Button>
              </Card.Body>
            </Card>
          )
          })}
      </CardColumns>
      </div>
    </div>
  ));
}

export default Comics;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardColumns } from 'react-bootstrap';
const axios = require('axios');

function Comics () {
  // const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'get',
      url: 'http://localhost:3001/comics',
      headers: {'authorization': JSON.parse(localStorage.getItem('token'))}, 
    })
      .then((response) => {
        console.log(response.data);
        setComics(response.data)
        setLoading(false);
      })
      .catch((err) =>{
        console.log(localStorage.getItem('token'))
        console.log(err.message);
      })
  }, [])

  return (
    loading ? <p>Loading...</p> : (
    <div className="container mt-5">
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
                <Link to='/comics/details'>
                  <Button className="btn btn-dark" variant="primary">Detalhes</Button>
                </Link>
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

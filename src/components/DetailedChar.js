import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import api from '../services/api';

function DetailedChar() {
  const { id } = useParams(); 
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/characters/${id}`)
      .then((response) => {
        console.log(response.data);
        setCharacter(response.data);
        setLoading(false);
      })
      .catch((err) =>{
        console.log(localStorage.getItem('token'))
        console.log(err.message);
      })
  }, [id])

  return (
    loading ? <p>Loading...</p> : (
    <div className="container mt-5 min-vh-100">
      <Link to='/characters'>
        <h5>Voltar</h5>
      </Link>
      <div className="column m-5">
        {character.map((detail, index) => {
        return (
          <Card className="card w-100">
            <Card.Img key={`${index}-card-thumb`} variant="top" src={detail.thumbnail.path+'.'+detail.thumbnail.extension} />
            <Card.Body key={`${index}-card-body`}>
              <Card.Title key={`${index}-card-title`}>{detail.name}</Card.Title>
              <Card.Text key={`${index}-card-text`}>
                {detail.description ? detail.description : 'No description!'}
              </Card.Text>
            </Card.Body>
            <ListGroup key={`${index}-card-list`} className="list-group-flush">
              <h5>Comics:</h5>
              {character[0].comics.items.map((item, i) => {
                return (
                  <ListGroupItem key={`${i}-card-item`}>{item.name}</ListGroupItem>
                )
              })}
            </ListGroup>
            <Card.Body key={`${index}-card-body-2`}>
              <Card.Link key={`${index}-card-link1`} href={detail.urls[0].url} target="_blank">Mais detalhes</Card.Link>
              <Card.Link key={`${index}-card-link2`} href={detail.urls[2].url} target="_blank">Comics</Card.Link>
            </Card.Body>
          </Card>
        )})}
      </div>
    </div>
  ));
}

export default DetailedChar;
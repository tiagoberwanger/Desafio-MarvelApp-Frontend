import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardColumns, ListGroup, ListGroupItem } from 'react-bootstrap';
const axios = require('axios');

function DetailedChar() {
  const { id } = useParams(); 
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'get',
      url: `http://localhost:3001/characters/${id}`,
      headers: {'authorization': JSON.parse(localStorage.getItem('token'))}, 
    })
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
            <Card.Img variant="top" src={`${detail.thumbnail.path}.jpg`} />
            <Card.Body>
              <Card.Title>{detail.name}</Card.Title>
              <Card.Text>
                {detail.description ? detail.description : 'No description!'}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <h5>Comics:</h5>
              {character[0].comics.items.map((item) => {
                return (
                  <ListGroupItem>{item.name}</ListGroupItem>
                )
              })}
            </ListGroup>
            <Card.Body>
              <Card.Link href={detail.urls[0].url} target="_blank">Mais detalhes</Card.Link>
              <Card.Link href={detail.urls[2].url} target="_blank">Comics</Card.Link>
            </Card.Body>
          </Card>
        )})}
      </div>
    </div>
  ));
}

export default DetailedChar;
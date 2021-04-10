import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardColumns, ListGroup, ListGroupItem } from 'react-bootstrap';
const axios = require('axios');

function DetailedCom() {
  const { id } = useParams(); 
  const [loading, setLoading] = useState(true);
  const [comic, setComic] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'get',
      url: `http://localhost:3001/comics/${id}`,
      headers: {'authorization': JSON.parse(localStorage.getItem('token'))}, 
    })
      .then((response) => {
        console.log(response.data);
        setComic(response.data)
        setLoading(false);
      })
      .catch((err) =>{
        console.log(localStorage.getItem('token'))
        console.log(err.message);
      })
  }, [])

  return (
    loading ? <p>Loading...</p> : (
    <div className="container mt-5 min-vh-100">
      <Link to='/comics'>
        <h5>Voltar</h5>
      </Link>
      <div className="row ml-3">
      <CardColumns>
        {comic.map((detail, index) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${detail.thumbnail.path}.jpg`} />
            <Card.Body>
              <Card.Title>{detail.title}</Card.Title>
              <Card.Text>
                {detail.description ? detail.description : 'No description!'}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Card>
        )})}
        </CardColumns>
      </div>
    </div>
  ));
}

export default DetailedCom;
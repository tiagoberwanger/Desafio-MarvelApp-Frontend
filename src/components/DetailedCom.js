import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import api from '../services/api';

function DetailedCom() {
  const { id } = useParams(); 
  const [loading, setLoading] = useState(true);
  const [comic, setComic] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/comics/${id}`)
      .then((response) => {
        console.log(response.data);
        setComic(response.data)
        setLoading(false);
      })
      .catch((err) =>{
        console.log(localStorage.getItem('token'))
        console.log(err.message);
      })
  }, [id])

  return (
    loading ? <p>Loading...</p> : (
    <div className="container mt-5">
      <Link to='/comics'>
        <h5>Voltar</h5>
      </Link>
      <div className="column m-5">
        {comic.map((detail, index) => {
        return (
          <Card className="card w-100">
            <Card.Img variant="top" src={detail.thumbnail.path+'.'+detail.thumbnail.extension} />
            <Card.Body>
              <Card.Title>{detail.title}</Card.Title>
              <Card.Text>
                {detail.description ? detail.description : 'No description!'}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <h5>Stories:</h5>
              {comic[0].stories.items.map((item) => {
                return (
                  <ListGroupItem>{item.name}</ListGroupItem>
                )
              })}
            </ListGroup>
            <Card.Body>
              <Card.Link href={detail.urls[0].url} target="_blank">Mais detalhes</Card.Link>
            </Card.Body>
          </Card>
        )})}
      </div>
    </div>
  ));
}

export default DetailedCom;
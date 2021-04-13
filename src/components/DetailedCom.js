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
        setComic(response.data)
        setLoading(false);
      })
      .catch((err) =>{
        console.log(err.message);
      })
  }, [id])

  return (
    loading ? <p>Loading...</p> : (
    <div className="container min-vh-100 vw-75">
      <Link to='/comics'>
        <h5>Voltar</h5>
      </Link>
      <div className="column m-5">
        {comic.map((detail, index) => {
        return (
          <Card className="card w-100 p-2 border border-dark rounded">
            <Card.Img key={`${index}-card-thumb`} variant="top" src={detail.thumbnail.path+'.'+detail.thumbnail.extension} />
            <Card.Body key={`${index}-card-body`}>
              <Card.Title key={`${index}-card-title`}>{detail.title}</Card.Title>
              <Card.Text key={`${index}-card-text`}>
                {detail.description ? detail.description : 'Sem descrição!'}
              </Card.Text>
            </Card.Body>
            <ListGroup key={`${index}-card-list`} className="list-group-flush">
              <h5>Characters:</h5>
              {comic[0].characters.items.length === 0
              ? 'Sem personagens'
              : comic[0].characters.items.map((item, i) => {
                return (
                  <ListGroupItem key={`${i}-card-item`}>{item.name}</ListGroupItem>
                )
              })}
            </ListGroup>
            <Card.Body key={`${index}-card-body-2`}>
              <Card.Link key={`${index}-card-link1`} href={detail.urls[0].url} target="_blank">Mais detalhes</Card.Link>
            </Card.Body>
          </Card>
        )})}
      </div>
    </div>
  ));
}

export default DetailedCom;
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function Cards (props) {
const { index, card } = props;
const history = useHistory();
  return (
    <div>
    <Card key={`${index}-card-main-div`} style={{ width: '18rem' }} className='card w-100 border border-dark rounded'>
      <Card.Img key={`${index}-card-thumb`} variant="top" src={card.thumbnail.path+'.'+card.thumbnail.extension} />
      <Card.Body key={`${index}-card-div`}>
        <Card.Title key={`${index}-card-name`}>{card.name}</Card.Title>
          <Button onClick={() => history.push(`/${card.type}/${card.id}`)} className="btn btn-dark" variant="primary">Detalhes</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;
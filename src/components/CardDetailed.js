import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardDetailed(props) {
  const { index, card, favIcon, handleFavorite } = props;

  return (
    <div>
      <Card className="card w-100 p-2 border border-dark rounded">
        <Card.Img key={`${index}-card-thumb`} variant="top" src={card.thumbnail.path+'.'+card.thumbnail.extension} />
        <Card.Body key={`${index}-card-body`}>
          <Card.Title key={`${index}-card-title`}>{card.name}</Card.Title>
          <Button
          size='lg'
          variant='warning'
          onClick={() => handleFavorite()}
          >
            <FontAwesomeIcon icon={favIcon} />
          </Button>
          <Card.Text key={`${index}-card-text`}>
            {card.description ? card.description : 'Sem descrição!'}
          </Card.Text>
        </Card.Body>
        <ListGroup key={`${index}-card-list`} className="list-group-flush">
          <h5>Comics:</h5>
          {card.features.items.length === 0
          ? 'Sem comics'
          : card.features.items.map((item, i) => {
            return (
              <ListGroupItem key={`${i}-card-item`}>{item.name}</ListGroupItem>
            )
          })}
        </ListGroup>
        <Card.Body key={`${index}-card-body-2`}>
          <Card.Link key={`${index}-card-link1`} href={card.urls[0].url} target="_blank">Mais detalhes</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardDetailed;
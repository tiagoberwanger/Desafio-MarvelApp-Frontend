import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Loading from '../design/Loading'
import Back from '../design/Back'
import api from '../services/api';
import { faHeart as whiteHeartButton } from "@fortawesome/free-regular-svg-icons";
import { faHeart as blackHeartButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DetailedCom() {
  const { id } = useParams(); 
  const [loading, setLoading] = useState(true);
  const [comic, setComic] = useState('');
  const [favIcon, setFavicon] = useState(whiteHeartButton);
  const [comicObj, setComicObj] = useState({});

  useEffect(() => {
    setLoading(true);
    api
      .get(`/comics/${id}`)
      .then((response) => {
        setComic(response.data)
        setComicObj({
          id: response.data[0].id,
          name: response.data[0].title,
          thumbnail: response.data[0].thumbnail,
        })
        const isFavorite = JSON.parse(localStorage.getItem('favComics'))
        if (isFavorite.length > 0 && isFavorite[0].id === response.data[0].id) {
          setFavicon(blackHeartButton)
        }
        setLoading(false);
      })
      .catch((err) =>{
        console.log(err.message);
      })
  }, [id])

  const handleFavorite = () => {
    let favComics = JSON.parse(localStorage.getItem('favComics'))
    if (favIcon === whiteHeartButton) {
      setFavicon(blackHeartButton)
      favComics.push(comicObj)
      localStorage.setItem('favComics', JSON.stringify(favComics))
    } else {
      setFavicon(whiteHeartButton)
      favComics = favComics.filter((comic) => comic.id !== comicObj.id)
      localStorage.setItem('favComics', JSON.stringify(favComics))
    }
  }

  return (
    loading ? <Loading /> : (
    <div className="container min-vh-100">
      <Back path='comics' />
      <div className="column m-5">
        {comic.map((detail, index) => {
        return (
          <Card className="card w-100 p-2 border border-dark rounded">
            <Card.Img key={`${index}-card-thumb`} variant="top" src={detail.thumbnail.path+'.'+detail.thumbnail.extension} />
            <Card.Body key={`${index}-card-body`}>
              <Card.Title key={`${index}-card-title`}>{detail.title}</Card.Title>
              <Button
              variant='warning'
              onClick={() => handleFavorite()}
              >
                <FontAwesomeIcon icon={favIcon} />
              </Button>
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
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading'
import Back from '../components/Back'
import api from '../services/api';
import CardDetailed from '../components/CardDetailed'
import { faHeart as whiteHeartButton } from "@fortawesome/free-regular-svg-icons";
import { faHeart as blackHeartButton } from "@fortawesome/free-solid-svg-icons";

function DetailedCom() {
  const { id } = useParams(); 
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState('');
  const [comicObj, setComicObj] = useState({});
  const [favIcon, setFavicon] = useState(whiteHeartButton);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/comics/${id}`)
      .then((response) => {
        setCards(response.data)
        setComicObj({
          id: response.data[0].id,
          name: response.data[0].name,
          thumbnail: response.data[0].thumbnail,
          type: response.data[0].type
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
        {cards.map((card, index) => 
          <CardDetailed 
            card={card} 
            index={index} 
            handleFavorite={handleFavorite}
            favIcon={favIcon}
          /> 
        )}
      </div>
    </div>
  ));
}

export default DetailedCom;
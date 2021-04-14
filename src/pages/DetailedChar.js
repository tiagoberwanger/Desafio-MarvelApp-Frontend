import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading'
import Back from '../components/Back'
import CardDetailed from '../components/CardDetailed'
import api from '../services/api';
import { faHeart as whiteHeartButton } from "@fortawesome/free-regular-svg-icons";
import { faHeart as blackHeartButton } from "@fortawesome/free-solid-svg-icons";


function DetailedChar() {
  const { id } = useParams(); 
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState('');
  const [CharacterObj, setCharacterObj] = useState({});
  const [favIcon, setFavicon] = useState(whiteHeartButton);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/characters/${id}`)
      .then((response) => {
        setCards(response.data);
        setCharacterObj({
          id: response.data[0].id,
          name: response.data[0].name,
          thumbnail: response.data[0].thumbnail,
          type: response.data[0].type
        })
        const isFavorite = JSON.parse(localStorage.getItem('favCharacters'))
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
    let favCharacters = JSON.parse(localStorage.getItem('favCharacters'))
    if (favIcon === whiteHeartButton) {
      setFavicon(blackHeartButton)
      favCharacters.push(CharacterObj)
      localStorage.setItem('favCharacters', JSON.stringify(favCharacters))
    } else {
      setFavicon(whiteHeartButton)
      favCharacters = favCharacters.filter((char) => char.id !== CharacterObj.id)
      localStorage.setItem('favCharacters', JSON.stringify(favCharacters))
    }
  }

  return (
    loading ? <Loading /> : (
    <div className="container min-vh-100">
      <Back path='characters' />
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

export default DetailedChar;
import React, { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
const axios = require('axios');

function Characters () {
  // const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'get',
      url: 'http://localhost:3001/characters',
      headers: {'authorization': JSON.parse(localStorage.getItem('token'))}, 
    })
      .then((response) => {
        console.log(response.data);
        setCharacters(response.data);
        setLoading(false);
      })
      .catch((err) =>{
        console.log(localStorage.getItem('token'))
        console.log(err.message);
      })
  }, [])

  return (
    loading ? <p>Loading...</p> : (
      <div className="container-fluid ml-4 mt-5">
        <h1 className='text-center text-black'>Characters</h1>
        <div className="row">
          <div className="card-deck">
          {characters.map((character, index) => {
            return (
            <div key={`${index}-card-main-div`} className="card mb-4" style={{minWidth: '18rem', maxWidth: '18rem'}}>
              <img key={`${index}-card-thumb`} className="card-img-top img-fluid" src={`${character.thumbnail.path}.jpg`} style={{height: '400px', objectFit: 'cover'}} alt="character" />
              <div key={`${index}-card-div`} className="card-body">
                <h5 key={`${index}-card-name`} className="card-title">{character.name}</h5>
                <button href="#" className="btn btn-dark">Saiba mais</button>
              </div>
            </div>
            )
            })}
          </div>
        </div>
      </div>
  ));
}

export default Characters;


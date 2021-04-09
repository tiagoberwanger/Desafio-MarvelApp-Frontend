import React, { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
const axios = require('axios');

function Comics () {
  // const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'get',
      url: 'http://localhost:3001/comics',
      headers: {'authorization': JSON.parse(localStorage.getItem('token'))}, 
    })
      .then((response) => {
        console.log(response.data);
        setComics(response.data)
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
      <h1 className='text-center text-black'>Comics</h1>
      <div className="row">
        <div className="card-deck">
        {comics.map((comic, index) => {
          return (
          <div className="card mb-4" style={{minWidth: '18rem', maxWidth: '18rem'}}>
            <img className="card-img-top img-fluid" src={`${comic.thumbnail.path}.jpg`} style={{height: '400px', objectFit: 'cover'}} alt="comic" />
            <div className="card-body">
                <h5 className="card-title">{comic.title}</h5>
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

export default Comics;

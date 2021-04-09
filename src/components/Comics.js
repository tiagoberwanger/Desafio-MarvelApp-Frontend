import React, { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
const axios = require('axios');

function Comics () {
  // const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'get',
      url: 'http://localhost:3001/comics',
      headers: {'authorization': JSON.parse(localStorage.getItem('token'))}, 
    })
      .then((response) => {
        setLoading(false);
        console.log(response.data);
      })
      .catch((err) =>{
        console.log(localStorage.getItem('token'))
        console.log(err.message);
      })
  }, [])

  return (
    loading ? <p>Loading...</p> : (
    <div className="container">
      Comics Cards
    </div>
  ));
}

export default Comics;
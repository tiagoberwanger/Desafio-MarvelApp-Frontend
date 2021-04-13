import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Back(props) {
  const { path } = props;
  return (
    <div>
      <Link to={`/${path}`}>
        <Button variant="warning">Voltar</Button>
      </Link>
    </div>
  );
}

export default Back;
import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loading() {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center align-items-center'>
          <Spinner animation="grow" variant="warning" />
      </div>
    </div>
  );
}

export default Loading;
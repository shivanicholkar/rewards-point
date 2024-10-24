import React from 'react';

const CustomerPoints = ({ points, month }) => {
  return (
    <div className='result-div'>
      <h2>Results</h2>
      <p>Total Points: <span className='points'> {points} </span></p>
      <p>Month: <span className='points'> {month} </span></p>
    </div>
  );
};

export default CustomerPoints;

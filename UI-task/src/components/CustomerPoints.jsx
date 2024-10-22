import React from 'react';

const CustomerPoints = ({ points, month }) => {
  return (
    <div>
      <h2>Results</h2>
      <p>Total Points: {points}</p>
      <p>Month: {month}</p>
    </div>
  );
};

export default CustomerPoints;

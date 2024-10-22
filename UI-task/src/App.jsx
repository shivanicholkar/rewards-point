// src/App.js

import React, { useState } from 'react';

const calculatePoints = (amount) => {
  let points = 0;

  if (amount > 100) {
    points += (amount - 100) * 2; // 2 points for every dollar over $100
    points += 50; // 1 point for every dollar between $50 and $100
  } else if (amount > 50) {
    points += (amount - 50); // 1 point for every dollar between $50 and $100
  }

  return points;
};

const App = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [result, setResult] = useState(null);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleCalculate = () => {
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0 || !date) {
      alert("Please enter a valid amount and date.");
      return;
    }

    const points = calculatePoints(parsedAmount);
    const month = new Date(date).toLocaleString('default', { month: 'long' });

    setResult({
      points,
      month,
    });
  };

  return (
    <div>
      <h1>Reward Points Calculator</h1>

      <div>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={handleAmountChange}
        />
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
        />
        <button onClick={handleCalculate}>Calculate Points</button>
      </div>

      {result && (
        <div>
          <h2>Results</h2>
          <p>Total Points: {result.points}</p>
          <p>Month: {result.month}</p>
        </div>
      )}
    </div>
  );
};

export default App;

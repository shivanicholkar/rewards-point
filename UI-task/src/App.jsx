// src/App.js

import React, { useEffect, useState } from 'react';
import { fetchTransactions } from './api';

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
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [filteredData, setFilteredData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const fetchedTransactions = await fetchTransactions();
      setTransactions(fetchedTransactions);
      setLoading(false);
    };

    getData();
  }, []);

  const handleInputChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSearch = () => {
    const newAmount = parseFloat(amount);
    const transactionPoints = calculatePoints(newAmount);

    const data = transactions.find(transaction => transaction.customerId === parseInt(customerId) && transaction.amount === newAmount && transaction.date === date);
    
    if (data) {
      setFilteredData({
        total: transactionPoints,
        monthly: { [new Date(date).toLocaleString('default', { month: 'long' })]: transactionPoints },
      });
    } else {
      setFilteredData({});
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Reward Points Summary</h1>

      <div>
        <input
          type="number"
          placeholder="Enter Customer ID"
          value={customerId}
          onChange={handleInputChange}
        />
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
        <button onClick={handleSearch}>Search</button>
      </div>

      {filteredData.total !== undefined ? (
        <div>
          <h2>Customer ID: {customerId}</h2>
          <p>Total Points: {filteredData.total}</p>
          <h3>Monthly Points:</h3>
          <ul>
            {Object.entries(filteredData.monthly).map(([month, points]) => (
              <li key={month}>{month}: {points} points</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No data found for this Customer ID and transaction.</div>
      )}
    </div>
  );
};

export default App;

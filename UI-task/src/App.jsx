import React, { useState } from 'react';
import InputForm from './components/InputForm';
import CustomerPoints from './components/CustomerPoints';
import { calculatePoints } from "./utils/rewards";
import './index.css';

const App = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleCalculate = () => {
    try {
      const parsedAmount = parseFloat(amount); //used parsefloat to convert string values into the numbers ex: "10.2"= 10.2
      if (isNaN(parsedAmount) || parsedAmount <= 0 || !date) {
        throw new Error("Please enter a valid amount and date.");
      }

      const points = calculatePoints(parsedAmount);
      const month = new Date(date).toLocaleString('default', { month: 'long' });

      setResult({ points, month });
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message);
      setResult(null);
    }
  };

  return (
    <div className='main-div'>
      <h1>Reward Points Calculator</h1>
      <InputForm 
        amount={amount} 
        date={date} 
        onAmountChange={handleAmountChange} 
        onDateChange={handleDateChange} 
        onCalculate={handleCalculate} 
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <CustomerPoints points={result.points} month={result.month} />}
    </div>
  );
};

export default App;

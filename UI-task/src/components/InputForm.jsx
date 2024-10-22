import React from 'react';

const InputForm = ({ amount, date, onAmountChange, onDateChange, onCalculate }) => {
  return (
    <div>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={onAmountChange}
      />
      <input
        type="date"
        value={date}
        onChange={onDateChange}
      />
      <button onClick={onCalculate}>Calculate Points</button>
    </div>
  );
};

export default InputForm;

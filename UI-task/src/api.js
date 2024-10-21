const transactions = [
    { customerId: 1, amount: 120, date: '2024-01-15' },
    { customerId: 1, amount: 80, date: '2024-01-22' },
    { customerId: 2, amount: 200, date: '2024-01-10' },
    { customerId: 2, amount: 30, date: '2024-02-15' },
    { customerId: 1, amount: 150, date: '2024-02-20' },
    { customerId: 1, amount: 90, date: '2024-03-05' },
    { customerId: 2, amount: 250, date: '2024-03-10' },
  ];
  
  export const fetchTransactions = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(transactions);
      }, 1000);
    });
  };
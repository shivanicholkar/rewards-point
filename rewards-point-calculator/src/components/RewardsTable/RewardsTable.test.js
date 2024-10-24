import React from 'react';
import { render, screen } from '@testing-library/react';
import RewardsTable from './RewardsTable';  // Adjust the path if needed
import '@testing-library/jest-dom';

describe('RewardsTable', () => {
  const mockRewards = {
    '1': {
      monthly: {
        January: 150,
        February: 200,
      },
      total: 350,
    },
    '2': {
      monthly: {
        January: 100,
        March: 250,
      },
      total: 350,
    },
  };

  it('should render an empty table when no rewards data is available', () => {
    const emptyRewards = {};

    render(<RewardsTable rewards={emptyRewards} />);

    // Check that no customer data is displayed
    expect(screen.queryByText('Customer ID:')).not.toBeInTheDocument();
  });

  it('should handle customers with no monthly rewards', () => {
    const rewardsWithNoMonthlyData = {
      '1': {
        monthly: {},
        total: 0,
      },
    };

    render(<RewardsTable rewards={rewardsWithNoMonthlyData} />);

    // Check that customer ID is displayed
    expect(screen.getByText('Customer ID: 1')).toBeInTheDocument();

    // Check that no monthly data is displayed
    expect(screen.queryByText('Month')).not.toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});

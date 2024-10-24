import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust the import based on your file structure

describe('App Component', () => {
  it('should render the header text', () => {
    render(<App />);

    // Check if the header text is in the document
    expect(screen.getByText('Retailer Rewards Program')).toBeInTheDocument();
  });

});

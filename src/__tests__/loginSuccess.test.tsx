import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import LoginSuccess from '../pages/LoginSuccess';
import { BrowserRouter } from 'react-router-dom'

it('renders welcome message', () => {
    render(<LoginSuccess />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Success/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Jersey/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
});


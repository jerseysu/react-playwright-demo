import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Login from '../pages/Login';
import { BrowserRouter } from 'react-router-dom'

it('renders login page', () => {
    render(<Login />, { wrapper: BrowserRouter });

    const emailInputBox = screen.getByTestId('email');
    const passwordInputBox = screen.getByTestId('password');

    expect(screen.getByText(/Register/i)).toBeInTheDocument();
    expect(emailInputBox).toBeInTheDocument();
    expect(passwordInputBox).toBeInTheDocument();
});


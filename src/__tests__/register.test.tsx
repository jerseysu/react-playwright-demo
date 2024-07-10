import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Register from '../pages/Register';
import { BrowserRouter } from 'react-router-dom'

it('renders register page', () => {
    render(<Register />, { wrapper: BrowserRouter });

    const emailInputBox = screen.getByTestId('email');
    const passwordInputBox = screen.getByTestId('password');
    const userInputBox = screen.getByTestId('name');
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(emailInputBox).toBeInTheDocument();
    expect(passwordInputBox).toBeInTheDocument();
    expect(userInputBox).toBeInTheDocument();
});


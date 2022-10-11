import "@testing-library/jest-dom"
import React from "react";
import {render} from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import {describe, expect, it} from 'vitest'
import SignUpPage from "./SignUpPage";

describe("Sign up page", () => {
    describe("Layout", () => {
        it('has header', () => {
            const screen = render(<SignUpPage/>)
            const headerElement = screen.getByRole('heading', {name: /sign up/i})
            expect(headerElement).toBeInTheDocument()
        });

        it('has username input', () => {
            const screen = render(<SignUpPage/>)

            const usernameInput = screen.getByRole("textbox", {name: /username/i})
            expect(usernameInput).toBeInTheDocument()
        });

        it('has email input', () => {
            const screen = render(<SignUpPage/>)

            const emailInput = screen.getByRole("textbox", {name: /email/i})
            expect(emailInput).toBeInTheDocument()
        });

        it('has password input and password repeat', () => {
            const screen = render(<SignUpPage/>)

            const password = screen.getByPlaceholderText("password")
            expect(password).toBeInTheDocument()
            
            const passwordRepeat = screen.getByPlaceholderText("password-repeat")
            expect(passwordRepeat).toBeInTheDocument()
        });

        it('has sign up button', () => {
            const screen = render(<SignUpPage/>)

            const loginButton = screen.queryByRole("button", {name: /sign up/i})
            expect(loginButton).toBeInTheDocument()
        });

        it('disables sign up button initially', () => {
            const screen = render(<SignUpPage/>)

            const loginButtonDisable = screen.queryByRole("button", {name: /sign up/i})
            expect(loginButtonDisable).toBeDisabled()
        });
    })

    describe("Interactions", () => {
        it('enables the button when password and password repeat fields have same value', async() => {
            const user = userEvent.setup()
            const screen = render(<SignUpPage/>)

            const passwordInput = screen.getByPlaceholderText("password")
            const passwordRepeatInput = screen.getByPlaceholderText("password-repeat")

            await user.type(passwordInput, "same-password")
            await user.type(passwordRepeatInput, "same-password")

            const loginButton = screen.queryByRole("button", {name: /sign up/i})
            expect(loginButton).toBeEnabled()
        });
    })
})
import "@testing-library/jest-dom"
import React from "react";
import {render} from '@testing-library/react'
import {describe, expect, it} from 'vitest'
import SignUpPage from "./SignUpPage";

describe("signUp", () => {
    it('has header', () => {
        const screen = render(<SignUpPage/>)
        const headerElement = screen.queryByRole('heading', {name: "Sign Up"})
        expect(headerElement).toBeInTheDocument()
    });
})
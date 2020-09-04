import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";


test("ContactForm renders", () => {
    render(<ContactForm />)
})

test("email renders", () => {
    const { getByTestId } = render(<ContactForm />);
    const emailRender = getByTestId ("email");
    expect(emailRender.textContent).toBe("");
})

test("first and last name render", () => {
    const { getByPlaceholderText } = render(<ContactForm />);
    const firstNameRender = screen.getByPlaceholderText(/edd*/i);
    const lastNameRender = screen.getByPlaceholderText(/burke*/i);
})

test("Message renders", () => {
    const { getByLabelText } = render(<ContactForm />);
    const messageRender = screen.getByLabelText(/message/i);
})


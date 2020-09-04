import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";


test("ContactForm renders", () => {
    render(<ContactForm />)
})

test("email renders", () => {
    const { getByTestId } = render(<ContactForm />);
    const emailInput = getByTestId ("email");
    expect(emailInput.textContent).toBe("");
})

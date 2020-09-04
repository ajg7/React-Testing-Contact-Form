import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import ContactForm from "./ContactForm";


test("ContactForm is renders a contact", () => {
    render(<ContactForm />)
})
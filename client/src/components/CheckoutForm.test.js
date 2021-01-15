import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import { userEvent } from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //arrange
    render(<CheckoutForm />);
    //act
    const header = screen.getByText(/checkout form/i)
    //assert
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const fName =screen.getByLabelText(/first name/i)
    fireEvent.change(fName, { target: { value: "Sam" } });

    const button = screen.getByRole("button", { name: /checkout/i });
    fireEvent.change(fName, { target: { value: "Sam" } });
    fireEvent.click(button);

    const success = screen.getByTestId(/successMessage/i);
    expect(success).toBeInTheDocument();
});

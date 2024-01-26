import Contact from "../Contact"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Contact Us page test cases",()=>{
    test("Should render my Contact Us Component",()=>{
        render(<Contact />)
    
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load button inside Contact Component",()=>{
        render(<Contact />)
    
        const button = screen.getByRole("button");  // or const button = screen.getByText("Submit");
    
        //Assertion
        expect(button).toBeInTheDocument();
    })
    
    it("Should load input username inside Contact Component",()=>{
        render(<Contact />)
    
        const username = screen.getByPlaceholderText("username");  // or const message = screen.getByPlaceholderText("message");
    
        expect(username).toBeInTheDocument();
    })
    
    it("Should load 2 input boxes inside Contact Component",()=>{
        //Render
        render(<Contact />)
        // Querying
        const inputBoxes = screen.getAllByRole("textbox");
        //Assertion
        expect(inputBoxes.length).toBe(2); // or expect(inputBoxes.length).not.toBe(3); or many things are there.
    })
})


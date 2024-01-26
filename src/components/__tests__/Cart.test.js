import { act } from "react-dom/test-utils";
import Menu from "../Menu";
import { fireEvent, render,screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResMenu.json";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () =>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it ("Should load restaurant Menu Component", async ()=>{
    await act(async ()=> render(<Menu />));

    const accordionHeader = screen.getByText("Eco Veg Pizza (4)");
    fireEvent.click(accordionHeader);
})
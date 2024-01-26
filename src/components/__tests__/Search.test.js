import Body from "../Body";
import {fireEvent, render, screen} from "@testing-library/react" ;
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockRestaurantList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () =>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});  // manually creating the fetch function as we cannot make an api call from test because it does not run on browser but json which is browser like.
// and fetch bunction is given to us by browser.
// We are creating our own fetch function manually.
// fetch fn returns us a promise which after resolved gives us a json which again gives us a promise which we resolve to get the data.

it("Should search restarant list for Burger input",async ()=>{

    await act(async ()=> render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        )
    );
    const cardsBeforeLength = screen.getAllByTestId("resCard");
    expect(cardsBeforeLength.length).toBe(20);


    const searchBtn = screen.getByRole("button",{name:"Search"});
    const searchInput = screen.getByTestId("searchInput")    // or const searchInput = screen.getByRole("textbox")

    fireEvent.change(searchInput, {target : {value: "Burger"}});  // here we are creating an event because by typing burger explicitly in the search box
     // because we don't have event.targer.value as this event is given to us by the browser

    fireEvent.click(searchBtn);
    
    const cardsAfterLength = screen.getAllByTestId("resCard");

    expect(cardsAfterLength.length).toBe(2);

})

it ("Should filter top rated restaurant",async ()=>{
    //render the component and fake an api call
    await act(async ()=>render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));
    
    const cardBeforeFilter = screen.getAllByTestId("resCard");
    expect (cardBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByTestId("topRatedButton");
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect (cardsAfterFilter.length).toBe(18);


});

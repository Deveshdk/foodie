import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCard.mock.json"
import "@testing-library/jest-dom"

it("Should render my RestaurantCard component with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Bikanervala");
    expect(name).toBeInTheDocument();
});

it("Should render RestautantCard component with promoted label",()=>{
    
})
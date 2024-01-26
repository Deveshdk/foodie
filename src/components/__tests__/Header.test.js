import { fireEvent, render , screen} from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>  // we are providing browser router so that it could under Link component coming from react-router dom in Header.
    );

    //const loginButton = screen.getByRole("button");
    //const loginButton = screen.getByText("Login");
    const loginButton = screen.getByRole("button",{name:"Login"});
    
    expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with Cart Items 0",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>  // we are providing browser router so that it could under Link component coming from react-router dom in Header.
    );

    const cartItems = screen.getByText("Cart (0 items)");
    
    expect(cartItems).toBeInTheDocument();
});

it("Should render Header component with Cart Items",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);  // using Regex
    
    expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"Login"});  // finding the emelent
    fireEvent.click(loginButton);  // firing an event
    const logoutButton = screen.getByRole("button",{name:"Logout"});
    
    expect(logoutButton).toBeInTheDocument();
});
import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ClassComponent from "./components/ClassComponent";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout =()=>{
    const [userName,setUserName]= useState();

    useEffect(()=>{
    //Make an api call and send username and password
    const userInfo = {
        name:"Devesh Kumar"
        };
        setUserName(userInfo.name);
    },[]);
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
    )
};

const routes= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/restaurants/:resId",
                element:<Menu />
            },
            {
                path:"/class",
                element:<ClassComponent name={"Devesh Kumar"} profession={"Full Stack Web Developer"} hobbies={"Coding"}/>
            },
            {
                path:"/grocery",
                element:(<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>)
            },
            {
                path:"/copyright",
                element:<Copyright />
            },
            {
                path:"/cart",
                element:<Cart />
            }
        ],
        errorElement:<Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);


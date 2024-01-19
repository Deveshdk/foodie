import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ClassComponent from "./components/ClassComponent";

const AppLayout =()=>{
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
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
            }
        ],
        errorElement:<Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);


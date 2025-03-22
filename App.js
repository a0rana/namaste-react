import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router";
import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/Body";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Body from "./src/components/Body";
import RestaurantMenu from "./src/components/RestaurantMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

const browserRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    }
]);
root.render(<RouterProvider router={browserRouter}/>);
import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router";
import HeaderComponent from "./src/components/Header";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Body from "./src/components/Body";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout = () => {
    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Anurag Rana",
        };
        setUserName(data.name);
    }, []);

    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <HeaderComponent/>
                <Outlet/>
            </div>
        </UserContext.Provider>
    );
};

const Grocery = lazy(() => import("./src/components/Grocery"));

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
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
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
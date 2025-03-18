import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent/>
            <BodyComponent/>
        </div>
    );
};
root.render(<AppLayout/>);
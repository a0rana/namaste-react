import React from "react";
import {LOGO_URL} from "../../utils/constants";

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL}
                     className="logo" alt="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderComponent;
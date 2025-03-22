import React, {useEffect, useState} from "react";
import {LOGO_URL} from "../../utils/constants";
import {Link} from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";

const HeaderComponent = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL}
                     className="logo" alt="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online: {(onlineStatus ? "✅" : "🔴")}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default HeaderComponent;
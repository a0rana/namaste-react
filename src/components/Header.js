import React, {useContext, useState} from "react";
import {LOGO_URL} from "../../utils/constants";
import {Link} from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const HeaderComponent = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    return (
        <div className={"flex justify-between bg-amber-100"}>
            <div className="logo-container">
                <img src={LOGO_URL}
                     className="w-30" alt="logo"></img>
            </div>
            <div>
                <ul className="flex p-4 m-4">
                    <li className="m-4">
                        Online: {(onlineStatus ? "✅" : "🔴")}
                    </li>
                    <li className="m-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="m-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="m-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="m-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="m-4">Cart</li>
                    <button className="m-4 bg-amber-400 border-1 px-1" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                    <li className="m-4">
                        Username: {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderComponent;
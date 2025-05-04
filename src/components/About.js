import React from 'react';
import UserClass from "./UserClass";
import UserContext from "../../utils/UserContext";

function About() {
    return (
        <div>
            <h1 className="text-left font-bold">About Us</h1>
            <UserClass name="Child1" location="Pune"/>
            <UserClass name="Child2" location="Delhi"/>
            LoggedIn User
            <UserContext.Consumer>
                {({loggedInUser}) => (
                    <h1 className="text-xl font-bold">{loggedInUser}</h1>
                )}
            </UserContext.Consumer>
        </div>
    );
}

export default About;
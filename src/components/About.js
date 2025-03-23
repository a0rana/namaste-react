import React from 'react';
import UserClass from "./UserClass";

function About() {
    return (
        <div>
            <h1 className="text-left font-bold">About Us</h1>
            <UserClass name="Child1" location="Pune"/>
            <UserClass name="Child2" location="Delhi"/>
        </div>
    );
}

export default About;
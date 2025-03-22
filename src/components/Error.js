import React from 'react';
import {useRouteError} from "react-router";

function Error() {
    const err = useRouteError();
    return (
        <div>
            <h1>Error</h1>
            <h2>Something bad happened.....</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    );
}

export default Error;
import React from 'react';
import {Redirect, Link} from 'react-router-dom';

function Logout() {

    localStorage.removeItem("token");
    return (
        <div>
            <h1>Logged out</h1>
            <Link to="/">Log in again</Link>
        </div>
    );
}

export default Logout;
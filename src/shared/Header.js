import React from 'react';

export const Header = ({ setPage }) => {
    function handleClick(e) {
        e.preventDefault();
      }
    
    return (
        <div>
            <button onClick={e => setPage("profile")}>Profile</button>
            <button onClick={e => setPage("map")}>Map</button>
            <button onClick={e => setPage("login")}>Login</button>
            <button onClick={e => setPage("signup")}>Signup</button>
        </div>
    );
};


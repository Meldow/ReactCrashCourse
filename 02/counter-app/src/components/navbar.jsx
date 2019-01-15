import React, {Component} from 'react';

// Stateless Functional Component
// since we have no calculations or state
// simple stateless component

const Navbar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default Navbar;
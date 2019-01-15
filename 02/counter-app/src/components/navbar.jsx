import React, {Component} from 'react';

// Stateless Functional Component
// since we have no calculations or state
// simple stateless component

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                    {props.totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default Navbar;
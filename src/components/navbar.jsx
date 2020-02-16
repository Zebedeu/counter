import React, { Component } from 'react';

const NavBar = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">
                    {props.totalCounters}
                </span>
                </a>
            </nav>
        </React.Fragment>
      );

};


export default NavBar;
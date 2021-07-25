import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink activeClassName="active" to="/" exact>Students </NavLink>
            <NavLink activeClassName="active" to="/courses" exact>Courses </NavLink>
        </div>
    );
}

export default Navbar;

  
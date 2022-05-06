import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navBar.css';

class NavBar extends Component {
    render() { 
        return (
            <div className='nav-bg'>
                <div className='row'>
                    <div className='col-12 mx-auto'>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link className="navbar-brand" to="/">
                               Reading Room
                            </Link>

                            <button 
                                className="navbar-toggler" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" 
                                aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <i className='fa fa-bars navbar-bars' style={{fontSize: '30px'}}></i>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink 
                                            activeClassName='menu-active'
                                            className="nav-link active" 
                                            style={{color: "white"}}
                                            to="/"
                                            exact
                                        >
                                            <i className="fa fa-home" aria-hidden="true"></i>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            activeClassName='menu-active'
                                            className="nav-link" 
                                            style={{color: "white"}}
                                            to="/about"
                                        >
                                            <i className="fa fa-address-card" aria-hidden="true"></i>
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            activeClassName='menu-active'
                                            className="nav-link" 
                                            style={{color: "white"}}
                                            to="/features"
                                        >
                                            <i className="fa fa-book" aria-hidden="true"></i>
                                            Features
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            activeClassName='menu-active'
                                            className="nav-link" 
                                            style={{color: "white"}}
                                            to="/contact"
                                        >
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                            Contact
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            activeClassName='menu-active'
                                            className="nav-link" 
                                            style={{color: "white"}}
                                            to="/login"
                                        >
                                            <i className="fa fa-sign-in" aria-hidden="true"></i>
                                            Login
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            activeClassName='menu-active'
                                            className="nav-link" 
                                            style={{color: "white"}}
                                            to="/register"
                                        >
                                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                                            Register
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default NavBar;
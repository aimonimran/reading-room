import React, { Component } from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() { 
        return (
            <div className='footer'>
                {/* <div className='col-lg-4 order-lg-1 col-sm-12 order-sm-1 mx-auto'>
                    <NavLink to="">
                        <i className="fa-brands fa-facebook-f social-icon"></i>
                    </NavLink>
                    <NavLink to="">
                        <i className="fa-brands fa-instagram social-icon"></i>
                    </NavLink>
                    <NavLink to="">
                        <i className="fa-brands fa-twitter social-icon"></i>
                    </NavLink>
                </div> */}
                <div>
                    <h5>©2022 READING ROOM | ALL RIGHTS RESERVED</h5>
                </div>
            </div>
        );
    }
}
 
export default Footer;
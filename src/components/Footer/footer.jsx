import React, { Component } from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() { 
        return (
            <div className='footer'>
                <div>
                    <h5>©2022 READING ROOM | ALL RIGHTS RESERVED</h5>
                </div>
            </div>
        );
    }
}
 
export default Footer;
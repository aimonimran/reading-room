import React, { Component } from 'react';
import './about-us.css';
import aboutUsImg from '../../images/about-us.jpg';

class AboutUs extends Component {
    render() { 
        return (
            <div className="container" id="about">
                <div className="row about-us">
                    <div className="col-sm-10 col-lg-5 order-sm-2 order-lg-1 my-5">
                        <img className='about-us-image' src={aboutUsImg} alt="about-us-image" />
                    </div>
                    <div className="col-sm-12 col-lg-6 order-sm-2 order-lg-1 about-us-body">
                        <h1 className='about-us-title'>About Us</h1>
                        <h3 className='about-us-paragraph-one my-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </h3>
                        <h3 className='about-us-paragraph-two'>
                        Adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutUs;
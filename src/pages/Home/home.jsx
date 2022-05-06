import React, { Component } from 'react';
import AboutUs from '../AboutUs/about-us';
import Header from '../Header/header';
import Features from '../Features/features';
import Contact from './../Contact/contact';
import './home.css';

class Home extends Component {
    render() {

        return (
            <>
                <div className='header'>
                    <Header />
                </div>

                <div>
                    <AboutUs />
                </div>
                
                <div>
                    <Features />
                </div>
                
                <div>
                    <Contact />
                </div>
            </>
        );
    }
}
 
export default Home;
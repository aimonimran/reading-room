import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() { 
        return (
            <>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <h1 className='header-body'>Let's enter</h1>
                        <h1 className='header-title animated'>Reading<br/>Room</h1>
                    </div>
                    <div className='button'>
                        <button className='btn-explore'>Explore</button>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Header;
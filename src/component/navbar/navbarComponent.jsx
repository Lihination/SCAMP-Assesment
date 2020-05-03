import React from 'react';
import './navbarStyles.scss';

const Navbar = ()=>{
    return (
        <div className='navbar'>
            <h1>Covid Monitor</h1>
            <div className='inputs'>
                <input type="text" placeholder='Search Country'/>
                <button>Search</button>
            </div>
        </div>
    )
}

export default Navbar;
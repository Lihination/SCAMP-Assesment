import React from 'react';
import './navbarStyles.scss';



const Navbar = ({handleChange, searchText})=>{

    return (
        <div className='navbar sticky'>
            <h1>Covid Monitor</h1>
            <div className='inputs'>
                <input type="text" name='text' placeholder='Search Country' onChange={handleChange} value={searchText}/>
            </div>
        </div>
    )
}

export default Navbar;
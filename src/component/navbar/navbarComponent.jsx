import React, { useState, useEffect, useRef } from 'react';
import Countries from '../countries/countriesComponent'
import './navbarStyles.scss';



const onChangeHandler= (e)=>{
    let keyword = e.target.value;
    // useState({search:keyword})
}

// const country = Countries.filter((data)=>){

// }

const Navbar = ({handleChange, onSubmit, searchCountry})=>{
    // const [searchCountry, setSearchCountry] = useState('');
    // const [countryResults, setCountryResults] = useState([]);

    // const onSubmit=()=>{
    //     countryResults(setSearchCountry)
        
    // }

    // const handleChange = e =>{
    //     setSearchCountry(e.target.value);
    // };

    // useEffect(()=>{
    //     const result = Countries.filter(country => country.toLowerCase().includes(searchCountry)
    //     ); 
    //     setCountryResults(result)
    // },[countryResults]);
    
    return (
        <div className='navbar sticky'>
            <h1>Covid Monitor</h1>
            <div className='inputs'>
                <input type="text" name='text' placeholder='Search Country'onChange={handleChange} value={searchCountry}/>
                <button onSubmit={onSubmit}>Search</button>
            </div>
        </div>
    )
}

export default Navbar;
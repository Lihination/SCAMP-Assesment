import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Countries from '../countries/countriesComponent'
import './globalStyles.scss'
// import Testing from "../countries/Testing"

const Global = ()=>{
    const [globalStatistics, setglobalStatistics] = useState([])
    const globalUrl = 'https://api.covid19api.com/summary'

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await axios.get(globalUrl)
            setglobalStatistics(response.data.Countries);
            // console.log(response.data.Countries[0])
    };
    fetchData()
       
    }, []);
    const mappedCountries =  globalStatistics.map(countries=> <Countries countries={countries} key={countries.CountryCode}/>)
    return(
        <div>
            <div className='link' >
            <h1>Global Statistics</h1>
            <Link to='/'><button>home</button>
            </Link>
            </div>
            <div className='global'>
                 <div>
                    {mappedCountries}
                </div>
                
            </div>

        </div>
    )
}

export default Global;
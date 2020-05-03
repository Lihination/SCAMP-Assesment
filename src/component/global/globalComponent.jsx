import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './globalStyles.scss'
import Testing from "./Testing"

const Global = ()=>{
    const [globalStatistics, setglobalStatistics] = useState([])
    const globalUrl = 'https://api.covid19api.com/summary'

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await axios.get(globalUrl)
            setglobalStatistics(response.data.Countries);
            console.log(response.data.Countries[0])
    };
    fetchData()
       
    }, []);
    console.log(globalStatistics.Countries)
    const mapped =  globalStatistics.map(test=> <Testing test={test}/>)
    return(
        <div>
            <h1>Global Statistics</h1>
            <div className='global'>
                 <div>
                    {/* <h1>{globalStatistics.countries && globalStatistics.countries.map()}</h1> */}
                    {mapped}
                </div>
                
            </div>

        </div>
    )
}

export default Global;
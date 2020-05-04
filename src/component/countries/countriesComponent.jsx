import React from 'react'
import './countriesStyles.scss'

const Countries =({countries})=>{
    return(
        <div className='countries'>
            <div className='cases'>
                <h2>{countries.Country}</h2>
                <div className='confirmed'>
                    <h4>New Confirmed: {countries.NewConfirmed}</h4>
                    <h4>Total Confirmed: {countries.TotalConfirmed}</h4>
                </div>
                <div className='deaths' >
                    <h4>New Deaths: {countries.NewDeaths}</h4>
                    <h4>Total Deaths: {countries.TotalDeaths}</h4>
                </div>

                <div className='recovered' >
                    <h4>New Recovered:{countries.NewRecovered}</h4>
                    <h4>Total Recovered: {countries.TotalRecovered}</h4>
                </div>
            </div>          
        </div>
    )
}

export default Countries;
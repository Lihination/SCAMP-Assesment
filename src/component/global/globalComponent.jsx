import React from 'react'
import './globalStyles.scss'


const Global = ({searchCountry})=>{
    
    return(
        <div>
            <div className='link' >
            <h1>Global Statistics</h1>
            </div>
            <div className='global'>
                {searchCountry.map(country => (
                    <div className='cases'>
                    <h3 key={country.Slug}>{country.Country}</h3>
                    <div className='confirmed'>
                        <p>New Confirmed: {country.NewConfirmed} </p>
                        <p>Total Confirmed: {country.TotalConfirmed} </p>
                    </div>
                    <div className='deaths'>
                        <p>New Deaths: {country.NewDeaths} </p>
                        <p>Total Deaths: {country.TotalDeaths} </p>
                    </div>
                    <div className='recovered'>
                        <p>New Recovered: {country.NewRecovered} </p>
                        <p>Total Recoverd: {country.TotalRecovered} </p>
                    </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Global;
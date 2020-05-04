import React from 'react'
import { Link } from 'react-router-dom'
import Countries from '../countries/countriesComponent'
import './globalStyles.scss'


const Global = ({mappedCountries})=>{
    
    return(
        <div>
            <div className='link' >
            <h1>Global Statistics</h1>
                <Link to='/'><button>home</button></Link>
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
import React from 'react'
import { Link } from 'react-router-dom'
import GlobalStatistics from '../global/globalComponent'
import './boardStyles.scss'

const Board =({getStatistics})=>{
    return(
        <div className='board' >
            <h1>Get the Latest <br/>Update on<br/> Corona Virus 2019</h1>
            <Link to='/global'>
                <button onClick={getStatistics}>Global Statistics</button>
            </Link>
        </div>
    )
}

export default Board;
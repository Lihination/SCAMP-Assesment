import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './component/navbar/navbarComponent'
import Board from './component/board/boardComponent'
import GlobalStatistics from './component/global/globalComponent'
import Countries from './component/countries/countriesComponent'



function App() {

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
    const mappedCountries =  globalStatistics.map(countries=> <Countries countries={countries} key={countries.Slug}/>)

const [searchCountry, setSearchCountry] = useState('');
const [countryResults, setCountryResults] = useState([]);

// const handleChange = e =>{
//   setSearchCountry(e.target.value);
// };

// useEffect(()=>{
//   const result = Countries.filter(country => country.toLowerCase().includes(searchCountry)
//   );
//   setCountryResults(result)
// },[countryResults]);


  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/global' component={GlobalStatistics} />
          <Board/>
      </Switch>
      {mappedCountries}
    </div>
  );
}

export default App;

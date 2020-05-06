import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './component/navbar/navbarComponent'
import Board from './component/board/boardComponent'
import GlobalStatistics from './component/global/globalComponent'


function App() {

  const [globalStatistics, setglobalStatistics] = useState([]);
  const [searchCountry, setSearchCountry] = useState([]);
  const [searchText, setSearchText] = useState('');
  
    const globalUrl = 'https://api.covid19api.com/summary'

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await axios.get(globalUrl)
            setglobalStatistics(response.data.Countries);
            setSearchCountry(response.data.Countries);
            // console.log(response.data.Countries);
    };
    fetchData()
    // console.log(globalStatistics);

       
    }, []);

const handleChange = e =>{
  // console.log(e.target.value)
  const searchText = e.target.value.trim().toLowerCase();
  // console.log(searchText.length);
  setSearchText(searchText);
  if(searchText.length <= 0) {
    setSearchCountry(globalStatistics);
    return;
  }
  const filteredCountries = globalStatistics.filter(value => value.Country.toLowerCase().includes(searchText));
  setSearchCountry(filteredCountries);
  // console.log(filteredCountries);
};
  return (
    <div className="App">
      <Navbar searchText={searchText} handleChange={handleChange}/>
      <Switch>
      <Route path='/global' render={(props) => <GlobalStatistics {...props} searchCountry={searchCountry} />} />
        <Board/>
      </Switch>
    </div>
  );
}

export default App;

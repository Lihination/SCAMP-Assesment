import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './component/navbar/navbarComponent'
import Board from './component/board/boardComponent'
import GlobalStatistics from './component/global/globalComponent'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/global' component={GlobalStatistics} />
        <Board/>
      </Switch>
    </div>
  );
}

export default App;

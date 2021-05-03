import React from 'react';
import './App.scss';

import { Route, Switch } from 'react-router-dom';

import TheNavigation from './components/TheNavigation'
import TheFooter from './components/TheFooter'
import TheMain from './components/TheMain'

import Home from './views/Home'
import Credentials from './views/Credentials'
import Confirmation from './views/Confirmation'

function App() {
  return (
    <div className="App">
      <TheNavigation></TheNavigation>
      <main>

        <TheMain></TheMain>

        <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/credentials" component={Credentials}></Route>
              <Route path="/confirmation" component={Confirmation}></Route>
        </Switch>

      </main>
      <TheFooter></TheFooter>
    </div>
  );
}

export default App;

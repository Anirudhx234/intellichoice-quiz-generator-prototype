import React from 'react';
import './App.css';
import Home from './Home.js';
import { HashRouter, Switch, Route} from 'react-router-dom';
import Addition from './pages/Addition.js';
import Subtraction from './pages/Subtraction.js';
import Multiplication from './pages/Multiplication.js';
import Division from './pages/Division.js';
import Fractions from './pages/Fractions.js';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <HashRouter basename={process.env.PUBLIC_URL}>
        <Home />
          <Switch>
            <Route path="/addition" component={Addition} />
            <Route path="/subtraction" component={Subtraction} />
            <Route path="/multiplication" component={Multiplication} />
            <Route path="/division" component={Division} />
            <Route path="/fractions" component={Fractions} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Home from './Home.js';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Fractions from './pages/Fractions.js';
import QuizLayout from './pages/QuizLayout.js';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Home />
          <Switch>
          <Route path="/addition" component={QuizLayout} />
            <Route path="/subtraction" component={QuizLayout} />
            <Route path="/multiplication" component={QuizLayout} />
            <Route path="/division" component={QuizLayout} />
            <Route path="/fractions" component={Fractions} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

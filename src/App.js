import Header from './components/Header/Header';
import Teams from './components/Teams/Teams';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Details from './components/Club Details/Details';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/teams'>
            <Teams></Teams>
          </Route>
          <Route path='/club/:apiKey'>
            <Details></Details>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

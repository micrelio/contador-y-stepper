import React, { Component } from 'react';
import { Router, Redirect } from '@reach/router';
import './App.scss';
import NotFound from './components/NotFound';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Stepper2 from './views/Stepper/Stepper2';
import Counter2 from './views/Counter/Counter2';
import Login from './views/Login/Login';
import Register from './views/Register/Register';

class App extends Component {
  render() {
    return (
      //Se crea el modelo del controlador con sus valores
      <div className="App">
        <Navigation />
        <header className="App-header">
          <Router >
            <Counter2 path='/counter' />
            <Stepper2 path='/stepper' />
            <Register path='/register' />
            <NotFound path='notFound' />
            <Login path='/login' />
            <Redirect default from='*' to='login' no throw />
          </Router>
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;

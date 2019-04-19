import React, { Component } from 'react';
import { Router, Redirect } from '@reach/router';
import './App.scss';
// import NotFound from './components/NotFound';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Stepper2 from './views/Stepper/Stepper2';
import Counter2 from './views/Counter/Counter2';
import Login from './views/Login/Login';

class App extends Component {
  render() {
    return (
      //Se crea el modelo del controlador con sus valores
      <div className="App">
        <Navigation />
       
        
          <header className="App-header">
           <Router className='main'>
          <Stepper2 /*path='./views/Stepper/Stepper2'*/ />
          <Counter2/>
          {/* <NotFound path='notFound' /> */}
          <Login />
            </Router>
           
          </header>
        
        <Footer />
      </div>
    );
  }
}

export default App;

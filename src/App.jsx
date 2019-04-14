import React, { Component } from 'react';
import './App.css';
import Stepper from './Stepper/Stepper';
import Counter from './Counter/Counter';
import Reset from './Reset/Reset';
class App extends Component {
  render() {
    return (
      //Se crea el modelo del controlador con sus valores
      <div className="App">
        <header className="App-header">
        <div className="counter">
          <Counter back_color="red"></Counter> 
          <Counter startFrom={100}></Counter> 
          <Counter step={5}></Counter>
          </div>
          <div>
            <Stepper text="Adults" max={10} min={0} valor={0} ></Stepper>
          <Stepper text="Niños" max={20} min={0} valor={0} ></Stepper>
          <Stepper text="XXX" max={20} min={5} valor={0} ></Stepper>
          <Reset/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

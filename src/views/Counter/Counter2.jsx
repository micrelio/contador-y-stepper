import React from 'react';
import Counter from './Counter';
import './Counter.scss';
// import React, { Component } from 'react';

//Aqui se crea la vista para mostrar inicializando los valores
class Counter2 extends React.Component {
  //devolver vista
  render() {
    return (
      <div className="counter">
        <Counter back_color="red"></Counter>
        <Counter startFrom={100}></Counter>
        <Counter step={5}></Counter>
      </div>
    );
  }

}
export default Counter2;
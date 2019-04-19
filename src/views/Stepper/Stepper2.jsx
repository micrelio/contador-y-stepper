import React from 'react';
import Stepper from './Stepper';

import './Stepper.scss';
// import React, { Component } from 'react';


//Aqui se crea la vista para mostrar inicializando los valores
class Stepper2 extends React.Component {
  

  //devolver vista
  render() {
    

    return (
        <div>
        <Stepper text="Adults" max={10} min={0} valor={0} ></Stepper>
        <Stepper text="Niños" max={20} min={0} valor={0} ></Stepper>
        <Stepper text="XXX" max={20} min={5} valor={0} ></Stepper>
      </div>
    );
  }

}
export default Stepper2;
import './Stepper.css';
import React, { Component } from 'react';


//Aqui se crea la vista para mostrar inicializando los valores
class Stepper extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            text: props.text || 0,
            min: props.min || 0,
            max: props.max || 0,
            num: props.default || 0,
        }
    }


    
//modificamos
suma() {
  console.log(this.state.num);

 
       this.setState({num: this.state.num +1})
       
}

resta(){

     this.setState({num: this.state.num -1});
}


//devolver vista
render() {
       return (
          <div className="Stepper">
            <button onClick={this.suma.bind(this)}>+</button>
            <span className="spanStepper"> {this.state.num} </span>
            <button onClick={this.resta.bind(this)}>-</button>
          </div>
        );
      }
      
}
export default Stepper;
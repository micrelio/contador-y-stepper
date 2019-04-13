import './Counter.css';


import React, { Component } from 'react';


//Aqui se crea la vista para mostrar
class Counter extends Component {
    constructor(props) {
        super(props); 
        this.state = {
             num: props.startFrom || 0

        }
    }


    suma(){

        this.setState({num: this.state.num + this.props.step || 1});
    }





//devolver vista
render() {
      return (
         <div className="Stepper">
           <button onClick={this.suma.bind(this)}>{this.state.num}</button>
        
         
         </div>
       );
     }
     
}
export default Counter;
import './Stepper.css';
import React, { Component } from 'react';


//Aqui se crea la vista para mostrar inicializando los valores
class Stepper extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            text: props.text,
            min: props.min || 0,
            max: props.max || 0,
            num: props.valor || 0,
        }
    }


    
//modificamos
suma() {
 // console.log(this.state.num);
if(this.state.num<this.state.max){
 
       this.setState({num: this.state.num += 1})
}
       
}

resta(){
  if(this.state.num > this.state.min){
     this.setState({num: this.state.num -=1});
     console.log(this.state.num)
}


}

//devolver vista
render() { 
  let backgroundColor='';
  let style= {backgroundColor};
  if(this.state.num>5){
    backgroundColor='green'
  }
  // let style = backgroundColor;
  // console.log(backgroundColor);
  
  // if(this.state.num==0 ) {
    

  
  // }
       return (
          <div className="Stepper">
            <button onClick={this.suma.bind(this)}>+</button>
            <span style={style} className="spanStepper">{this.props.text}: {this.state.num} </span>
            <button onClick={this.resta.bind(this)}>-</button>
          </div>
        );
      }
      
}
export default Stepper;
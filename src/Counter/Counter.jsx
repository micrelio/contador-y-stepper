import './Counter.css';


import React, { Component } from 'react';
 
let fontSize = 10;

//Aqui se crea la vista para mostrar
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: props.startFrom || 0

    }
  }

  suma() {

    this.setState({ num: this.state.num += this.props.step || 1 });
    // fontSize=fontSize + 1 ;
    // console.log(this.state.num);
    console.log(fontSize);

  }





  //devolver vista
  render() {
   let style={fontSize};
    return (
      <span className="Counter">
        <button style={style} onClick={this.suma.bind(this)}>{this.state.num}</button>


      </span>
    );
  }

}
export default Counter;
import './Counter.css';


import React, { Component } from 'react';
 
// let fontSize = 17;

//Aqui se crea la vista para mostrar
class Counter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fontSize: 17,
      num: props.startFrom || 0

    }
  }

  suma() {
    console.log(this.state.fontSize);

    this.setState({ num: this.state.num += this.props.step || 1,   fontSize: this.state.fontSize += 1  });
    // fontSize=fontSize + 1 ;
    // console.log(this.state.num);

  }





  //devolver vista
  render() {
   let style={fontSize: this.state.fontSize + "px"};
    return (
      <span className="Counter">
        <button style={style} onClick={this.suma.bind(this)}>{this.state.num}</button>


      </span>
    );
  }

}
export default Counter;
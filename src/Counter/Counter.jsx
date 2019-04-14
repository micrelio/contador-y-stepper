import './Counter.css';
import Reset from '../Reset/Reset';
import React, { Component } from 'react';
// let fontSize = 17;

//Aqui se crea la vista para mostrar
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: 17,
      backgroundColor: '',
      num: props.startFrom || 0

    }
  }

  suma() {
    console.log(this.state.num);

    this.setState({ num: this.state.num += this.props.step || 1, fontSize: this.state.fontSize += this.props.step || 1 });
    // fontSize=fontSize + 1 ;
    // console.log(this.state.num);

  }

  reset() {
    this.setState({ num: this.state.num = this.props.startFrom || 0, fontSize: this.state.fontSize = 17 });
  }



  //devolver vista
  render() {
    let style = { fontSize: this.state.fontSize + "px", };
    if (this.state.num === 0 ) {
      
      style = { fontSize: this.state.fontSize + "px", backgroundColor: this.state.backgroundColor = 'red' };
    }

    return (
      <span className="Counter">
        <button style={style} onClick={this.suma.bind(this)}>{this.state.num}</button>
        <button className="reset" onClick={this.reset.bind(this)}>R</button>
        

      </span>
    );
  }

}
export default Counter;
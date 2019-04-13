import './Reset.css';
import Counter from '../Counter/Counter'

import React, { Component } from 'react';

// let fontSize = 17;

//Aqui se crea la vista para mostrar
class Reset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: 17,
      backgroundColor: '',
      num: props.startFrom || 0

    }
  }

 

  reset() {
    console.log(this.state.num)
    this.setState({ num: this.state.num = this.props.startFrom || 0, fontSize: this.state.fontSize = 17 });
  }



  //devolver vista
  render() {
    let style = { fontSize: this.state.fontSize + "px", };
    if (this.state.num === 0) {
      console.log(style)

      style = { fontSize: this.state.fontSize + "px", backgroundColor: this.state.backgroundColor = 'red' };
    }

    return (
      
        <button className="reset"  onClick={this.reset.bind(this)}>Reset</button>

     
    );
  }

}
export default Reset;
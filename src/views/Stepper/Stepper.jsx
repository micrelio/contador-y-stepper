import './Stepper.scss';
import React, { Component } from 'react';
let backgroundColor = '';

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
    if (this.state.num < this.state.max) {

      this.setState({ num: this.state.num += 1 })
    }

  }

  resta() {
    if (this.state.num > this.state.min) {
      this.setState({ num: this.state.num -= 1 });
      //  console.log(this.state.num)


    }


  }


  //devolver vista
  render() {
    if (this.state.num < 5) {
      backgroundColor = 'green';
    }
    else if (this.state.num === 5) {
      backgroundColor = 'lightblue';

    }
    else if (this.state.num === 20) {
      //  window.open(<img src="dinosaur.jpg">,"","width=550,height=420")
      window.open("/images/boom.gif", "", "width=550,height=420")
      // window.open("href='./public/images/boom.gif'","","width=550,height=420")

    }
    else if (this.state.num >= 10) {
      backgroundColor = 'red';
      console.log(this.state.num);


    }
    else if (this.state.num > 5) {
      backgroundColor = 'yellow';

    }


    let style = { backgroundColor };

    return (
      <div className="Stepper">
        <button onClick={this.suma.bind(this)}>+</button>
        <span style={style} className="spanStepper">{this.props.text}:{this.state.num} </span>
        <button onClick={this.resta.bind(this)}>-</button>
      </div>
    );
  }

}
export default Stepper;
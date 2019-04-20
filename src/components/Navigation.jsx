import React from 'react';
import { Link } from '@reach/router';
import './Navigation.scss';

class Navigation extends React.Component {
  render() {
    return (
      //Se crea el modelo del controlador con sus valores
      <div className="Navigation">
        <Link to='/login'><strong>Login</strong></Link>
        <Link to='/register'><strong>Register</strong></Link>
        <Link to='/stepper'><strong>Stepper</strong></Link>
        <Link to='/counter'><strong>Counter</strong></Link>




      </div>
    );
  }
}

export default Navigation;
import React from 'react';
import { Link } from '@reach/router';
import './Navigation.scss';

class Navigation extends React.Component {
  render() {
    return (
      //Se crea el modelo del controlador con sus valores
      <div className="Navigation">
        <Link to='/login'>Login</Link>
        <Link to='/movies/upcoming'>Register</Link>
        <Link to='/stepper'>Stepper</Link>
        <Link to='/counter'>Counter</Link>




      </div>
    );
  }
}

export default Navigation;
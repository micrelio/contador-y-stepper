import './Register.scss';
import React, { Component } from 'react';

class Register extends React.Component {
    render() {
        return (
            <div className="registro">

                <br />
                <div className="formulario">
                    <h1>REGISTER</h1>
                    <form action="/registro" method="post" >
                        <input type="nik" name="nik" placeholder="nik" />
                        <input type="email" name="email" placeholder="email" />
                        <input type="password" name="password" placeholder="password" />
            <div>
            {/* <input type="date" name="cumpleanios" step="1" min="2013-01-01" max="2013-12-31" value="<?php echo date("Y-m-d");?>"> */}

                Nacido: <input type="date" name="nacimiento"  />
                </div>
                        <select name="OS">
                            <option selected value="0"> Sexo </option>
                            <optgroup label="Elige opcion">
                                <option value="1">Masculino</option>
                                <option value="2">Femenino</option>
                                <option value="3">Prefiero no decirlo</option>
                            </optgroup>

                        </select>
                        <div>
                            <input type="radio" name="mayor" value="+18" />Publi
                        {/* <br/> */}
                        </div>
                        <input className="iniciar" type="submit" value="registrarme!" />
                    </form>
                </div>
            </div>


            //             <div class="feedback">

            //                 {{#if error}}
            //     <div class="error">
            //                     {{ error }}
            //                 </div>
            //                 {{/if}}


            //     {{#if message}}
            //     <div class="message">
            //                     {{ message }}
            //                     <a href="/login">LOGIN</a>
            //                 </div>
            //                 {{/if}}
            // </div>

        );
    }
}

export default Register;

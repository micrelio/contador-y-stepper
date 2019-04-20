import './Login.scss';
import React, { Component } from 'react';

class Login extends React.Component {
    render() {
        return (
            //Se crea el modelo del controlador con sus valores
            <div className="Login">
                <div className="unico">
                    {/* <img src="../images/haway.jpg " style=" no-repeat top  fixed" alt=""/>  */}
                    <h1>LOGIN</h1>
                    <br />
                    <div className="formulario">
                        <form action="/login" method="get">

                            <input type="email" name="email" placeholder="email" />
                            <input type="password" name="password" placeholder="password" />
                            <br />
                            <input className="iniciar" type="submit" value="login!" />
                        </form>
                    </div>
                </div>
            </div>
            //             <div class="feedback">

            //                 {{#if error}}
            //     <div class="error">
            //         {{error}}
            //     </div>
            //     {{/if}}


            //     {{#if message}}
            //     <div class="message">
            //         {{message}}
            //     </div>
            //     {{/if}}
            // </div>
            //             </div>
        );
    }
}

export default Login;

import './Register.scss';
import React, { Component } from 'react';

class Register extends React.Component {

    constructor(props) {
        super(props);
        // console.log(this.props.state);
        this.state = {
            nik: '',
            email: '',
            password: '', 
            
        }
        // console.log(this.state)
    }
  //  cada pulsacion en el input saca sus datos
    pusacion = (ev) => {
        console.log(ev.target.value)
        this.setState({
            [ev.target.name]: ev.target.value,
            [ev.target.email]: ev.target.value,
            [ev.target.password]: ev.target.value,
               })
               console.log(this.state)

    }

   

//se crea funcion para crear el evento
// añadeTarea =  texto =>{
//     texto = texto.trim();
//     if (texto) {
//         let newTask={
//             nik: '',
//             password: '',
//             // nacimiento: Date,
//             publy: false,
//         };
//         this.setState({
//             tasks: [newTask, ...this.state.user],
//             newTaskText: '',
//           });
//         }
//     };
    

    render() {
       
        // console.log(this.props.value)
        return (
            <div className="registro">
                {/* <br /> */}
                <div className="formulario">
                    <h1>REGISTER</h1>

                    <form action="/register" /*method="get"*/ >
                        <input type="nik" name="nik" placeholder="nik" value={this.state.nik} onChange={this.pusacion} />
                        <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.pusacion} />
                        <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.pusacion} />
                        {/* <input type="date" name="cumpleanios" step="1" min="2013-01-01" max="2013-12-31" value="<?php echo date("Y-m-d");?>"> */}
                        
                        {/* <div>

                            Nacido: <input type="date" name="nacimiento" nacimiento={this.props.nacimiento} />
                        </div> */}
                        {/* <select name="sexo">
                            <option selected value="0"> Sexo </option>
                            <optgroup label="Elige opcion">
                                <option value="1">Masculino</option>
                                <option value="2">Femenino</option>
                                <option value="3">Prefiero no decirlo</option>
                            </optgroup>
                        </select> */}
                        {/* <div>
                            <input type="radio" name="publi" value="publi" publi={this.props.publi} />Publi
                                            </div> */}
                        <input className="iniciar"  type="submit" value="registrarme!" onClick={this.pulsa} />
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

import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';
import {GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import imagen1 from './marlenne.jpg';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Examen() {

    const onSuccess = (res) => 
      {
         console.log("LOGUEADO CON ÉXITO:",res.profileObj);
         Swal.fire({
            icon: 'success',
            title: 'BIENEVENIDO APP UTD',
            text: 'LOGUEADO CON EXITO',
            footer: '<a href="www.utd.edu.mx"></a>'
          })
      }
    const onFailure = (res) => 
      {
          console.log("FALLO EN EL ACCESO:",res.profileObj);
          Swal.fire({
            icon: 'error',
            title: 'LAS CREDENCIALES SON ERRONEAS',
            text: 'FALLO EN EL ACCESO',
            footer: '<a href="http://localhost:3000">Why do I have this issue?</a>'
          })
      }
      const [ profile, setProfile ] = useState([]);
    const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
    const [values, setValues] = React.useState({
        email: "",
        password: "",
      });
      function handleSubmit(evt) {
        evt.preventDefault();
      }
      function handleChange(evt) {
        const { target } = evt;
        const { name, value } = target;
        const newValues = {
          ...values,
          [name]: value,
        };
        setValues(newValues);
      }
    

      
  
   return(
 
            <div>
            <Form>
      <Form.Group className="mt-8 mb-8" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Email"
        onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="success" onclick={handleSubmit}type="submit">
        Submit
      </Button>
    </Form>
            <br />
            <br />
               
            
        </div>
  
   
   )   
}      
export default Examen;
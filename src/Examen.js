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
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });
    const logOut = () => {
        setProfile(null);
    };
    useEffect(() => {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId      : 'TU_APP_ID_DE_FACEBOOK',
          cookie     : true,
          xfbml      : true,
          version    : 'v13.0'
        });
          
        window.FB.getLoginStatus(function(response) {
          console.log(response);
        });
      };
  
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }, []);
      

      
  
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
            {profile ? (
                <div>
                    <img src={imagen1} width={'250px'}  />
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <GoogleLogout 
                    clientId={"889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com"}
                    
                    buttonText="Log out" 
                    onLogoutSuccess={logOut} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={"889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com"}
                    buttonText="Sign in with Google"  
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
        </div>
  
   
   )   
}      
export default Examen;
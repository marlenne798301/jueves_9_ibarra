import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { gapi } from "gapi-script";

function Login() {

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
      
   return(
   
                <GoogleLogin
                    clientId={"889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com"}
                    buttonText="Sign in with Google"  
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
      
export default Login;
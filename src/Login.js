import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login'

import Swal from 'sweetalert2';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import { gapi } from "gapi-script";



function Login() {

    const key_login = '371163760517-e7cm1t83fug4bf1m51ta6q1hcdug6uda.apps.googleusercontent.com/'; 
    const log_face = '198963069403972';
    useEffect(() => {
      const start = () => {
        gapi.Auth2.init({
          clientId: key_login,
        });
      }
      gapi.load("client:auth2", start)
    }, [])
    useEffect(() => {
      const start = () => {
        gapi.Auth2.init({
          clientId: log_face
        });
      }
      gapi.load("client:auth2", start)
    }, [])
    const respuestaFacebook = (respuesta_correcta) => {
      if(respuesta_correcta.status == 'unknown'){
        console.log('fallo al iniciar sesion')
        Swal.fire({
          icon: 'error',
          title: 'FALLO AL INICIAR, FAVOR DE REVISAR E INTENTAR MAS TARDE',
        })
      }
      else{
        console.log('Logueado con exito', respuesta_correcta);
        setUser(respuesta_correcta)
        Swal.fire({
            icon: 'success',
            title: 'BIENVENIDO APP UTD',
          })
      }
  
      
    }

    const logeado_exito = (respuesta_exitosa) => {
      console.log("LOGUEADO CON ÉXITO:", respuesta_exitosa.profileObj);
      setUser(respuesta_exitosa.profileObj);
      Swal.fire({
        icon: 'success',
        title: 'BIENVENIDO APP UTD',
      })
    }

    const fallo_login = (res) => 
      {
          console.log("FALLO EN EL ACCESO:",res.profileObj);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'ALGO NO SALIO BIEN, REVISA TUS CREDENCIALES!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          
      }
      const [user, setUser] = useState({});

      const handleLogin = () =>{


      }
  
   return(
    <center>
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Correo electronico' placeholder='Ingresa tu correo' id='form1' type='email' />
      <MDBInput wrapperClass='mb-4' label='Contraseña' id='form2' placeholder='Ingresa tu contraseña' type='password' />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <a href="!#">Olvidaste tu contraseña?</a>
      </div>

      <MDBBtn className="mb-4" onClick={handleLogin}>Iniciar sesion</MDBBtn>

      <div className="text-center">
        <p>Aun no esta registrado? <a href="#!">Registrarse</a></p>
        <p>o Inicie sesion con:
          <br></br>
          <br></br>

        <GoogleLogin
          clientId={key_login}
          onSuccess={logeado_exito}
          onFailure={fallo_login}
          buttonText="INGRESAR"
          cookiePolicy={"single_host_origin"}
        />
        <div className='Login_face'>
      <center><br/><br/>
      <FacebookLogin
        appId="198963069403972"
        autoLoad={false}
        fields="name,email,picture"
        callback={respuestaFacebook} />   
        </center>
        
      </div>      
        </p>
        
      </div>

    </MDBContainer>     

            <div className="center">
      <div class={user? "profile" : "hidden"}>
        <img src={user?.imageUrl} alt=""/>
        <img src={user?.picture?.data?.url} />
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>

      </div>

    </div>             
      </center>    
      
   )   
}      
export default Login;
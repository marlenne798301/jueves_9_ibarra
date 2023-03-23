import React from 'react';
import FacebookLogin from 'react-facebook-login';

function Login_face() { 
  const respuestaFacebook = (respuesta) => {
    console.log(respuesta);
  }

  return (
    <FacebookLogin
    appId="198963069403972"
    autoLoad={false}
    fields="name,email,picture"
    callback={respuestaFacebook} />
  )
 
}

export default Login_face;
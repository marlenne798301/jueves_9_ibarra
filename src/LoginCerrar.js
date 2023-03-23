import React from 'react';
import { GoogleLogout } from 'react-google-login';
import Swal from 'sweetalert2';

function LoginCerrar() {

    
    
    const LoginCerrar=()=>{
        console.log("SESIÓN TERMINADA IBARRA ORTEGA");         
        Swal.fire({
            icon: 'success',
            title: 'SESION TERMINADA',
            text: 'SESION TERMINADA',
            footer: '<a href="www.utd.edu.mx"></a>'
          })
      } 

    return (    
           
                <GoogleLogout
                clientId="889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com"
                buttonText={"CERRAR SESIÓN"}
                onLogoutSuccess={LoginCerrar}
            /> 

           
            

    )
}/* //FIN DE LA FUNCION */

export default LoginCerrar;
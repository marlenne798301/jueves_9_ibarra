import React from 'react';
import Cartas from './Cartas';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Cartas 
            title="MÉTODO RENDER"
            description="Todo componente de react, tiene un método render que es el que se encarga de renderizar en el navegador el HTML correspondiente al componente. Este método se llama automaticámente cuando se crea un componente y cuando el estado del componente se actualiza (veremos esto más adelante)"
          />
        </div>
        <div className="col-md-4">
          <Cartas 
            title="MÉTODO STRICT MODE"
            description="StrictMode es una herramienta para destacar problemas potenciales en la aplicación. Al igual que Fragment, StrictMode no renderiza nada en la interfaz del usuario. Este modo también activa advertencias y comprobaciones adicionales para ses descendientes."
          />
        </div>
        <div className="col-md-4">
          <Cartas
            title="MÉTODO RETURN"
            description="Este método es obligatorio en cualquier componente, pues como su nombre lo dice, se utiliza para obtener los elementos finales a visualizar o pintar en el navegador. Debe ser una función pura, es decir, no debe modificar las props, no debe modificar el state ni realizar operaciones del DOM."
            
          />
         
         
        </div>
      </div>
      <br></br>
      <a href='https://github.com/marlenne798301/jueves_9_ibarra.git'>
      <button className='btn btn-danger'>VER MI REPOSITORIO</button></a>
    </div>
    
  );
}

export default Inicio;

import logo from './logo.svg';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import './App.css';
import { Map } from 'google-maps-react';
import Curriculum from './Curriculum';
import GoogleMaps, { MapContainer } from './GoogleMaps';
import image from './UTD.jpg';
import component from './Curriculum'
import Carrusel from './Carrusel'
import image1 from './marlenne.jpg';
import Maps from './GoogleMaps';
import Inicio from './Inicio';
import Cartas from './Cartas';



function App() {
  return (
    <Router>
      <center>
      <div className="container mt-5">    
        <div className="btn-group">
         <Link to="./Inicio" className="btn btn-danger">
          INICIO
          </Link>
          <Link to="/Curriculum" className="btn btn-light">
          CURRICULUM
         </Link>
         <Link to="/Mapa" className="btn btn-danger">
          MAPA
         </Link>  
         <Link to="/Carrusel" className="btn btn-light">
          CARRUSEL
         </Link>       
        </div>
        </div>
        </center>
      <Switch>
       
      
        <Route path="/nombre">
          <center> 
            <h1>UTD</h1>
            <h1>Marlenne Imelda Ibarra Ortega</h1>
            </center>
        </Route>
        <Route path="/utd">
          <center> 
            <h1>UNIVERSIDAD TECNOLOGICA DE DURANGO</h1>
            </center>
        </Route>
        <Route path="/carrera">
          <center> 
            <h1>Desarrollo de Software Multiplataforma</h1>
            </center>
        </Route>
        <Route path="/logo">
          <center> 
            <h1>UTD LOGO</h1>
            <img src={image} width={'250px'}>
            </img>
            </center>
        </Route>
        <Route path="/foto">
          <center> 
            <h1>Mi Foto</h1>
            <img src={image1} width={'250px'}>
            </img>
            </center>
        </Route>
        <Route path="/curriculum">
          <center> 
            <h1>Mi Curriculum</h1>
            <Curriculum />
            </center>
        </Route>
        <Route path="/carrusel">
          <center> 
            <h1>Mi Carrusel</h1>
            <Carrusel />
            </center>
        </Route>
        <Route path="/Mapa">
          <center> 
            <h1>Mi Casa</h1>
            <Maps />
            </center>
        </Route>
        <Route path="/">
          <center> 
            <Inicio/>
            <Cartas/>
            </center>
        </Route>
      </Switch>
    </Router>
    

    


  );
}




export default App;

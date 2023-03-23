import logo from './logo.svg';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import './App.css';
import Curriculum from './Curriculum';
import image from './UTD.jpg';
import Carrusel from './Carrusel'
import image1 from './marlenne.jpg';
import Maps from './GoogleMaps';
import Inicio from './Inicio';
import Cartas from './Cartas';
import Mockup from './Mockup';
import Login from './Login';
import LoginCerrar from './LoginCerrar';

function App() {
  return (
    <Router>
      <center>
      <div className="container mt-5">    
        <div className="btn-group">
         <Link to="./Inicio" className="btn btn-light">
          INICIO
          </Link>
          <Link to="/Curriculum" className="btn btn-danger">
          CURRICULUM
         </Link>
         <Link to="/Mapa" className="btn btn-light">
          MAPA
         </Link>
         <Link to="/Mockup" className="btn btn-danger">
         MOCKUP
         </Link>  
         <Link to="/Carrusel" className="btn btn-light">
          CARRUSEL
         </Link> 
         <Link to="/Login" className="btn btn-danger">
          LOGIN
         </Link> 
         <Link to="/LoginCerrar" className="btn btn-light">
          CERRAR
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
        <Route path="/Mockup">
          <center> 
            <h1>Mockup</h1>
            <Mockup />
            </center>
        </Route>
        <Route path="/Login">
          <center> 
          <h1>CREDENCIALES DEL USUARIO</h1>
          <Login />
            </center>
        </Route>
        <Route path="/LoginCerrar">
          <center> 
            <h1>Cerrar</h1>
            <LoginCerrar />
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

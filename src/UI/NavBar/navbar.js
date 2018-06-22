import React from 'react';
import {Navbar} from 'react-materialize'
import classes from './navbar.css'

const navBar = (props) =>{
  return(
    <nav>
    <div class="nav-wrapper">
       
      {/* <a href="#" class="brand-logo"><i class="material-icons text-blue lighten-5">home</i>Inicio</a> */}
      <ul class="right hide-on-med-and-down">
        <li><a href="#"><i class="material-icons">home</i>Inicio</a></li>
        <li><a href="#"><i class="material-icons">people</i>Personal</a></li>
        <li><a href="#"><i class="material-icons">insert_chart</i>Reportes</a></li>
      </ul>
      
    </div>
  </nav>
    
  )
}

export default navBar;
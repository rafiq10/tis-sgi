import React from 'react';
import classes from './navbar.css'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { NavLink } from 'react-router-dom';


const navBar = (props) =>{
  return(
    <StickyHeader
    header={<nav className={classes.Nav}>
              <div className="nav-wrapper">
                
                <NavLink to="/" className="brand-logo"><i className="material-icons text-blue lighten-5">home</i>Inicio</NavLink>
                <ul className="right hide-on-med-and-down">
                  <li><NavLink to="/"><i className="material-icons">home</i>Inicio</NavLink></li>
                  <li><NavLink to="/partes-list"><i className="material-icons">people</i>Personal</NavLink></li>
                  {!localStorage.getItem('token')
                    ? <li><NavLink to="/login"><i className="material-icons">person</i>Log In</NavLink></li>
                    : <li><NavLink to="/logout"><i className="material-icons">power_settings_new</i>Log Out</NavLink></li>
                  }
                </ul>
              </div>
            </nav>}
            ><p style={{padding: "20px"}}></p>
  </ StickyHeader>
    
  )
}

export default navBar;
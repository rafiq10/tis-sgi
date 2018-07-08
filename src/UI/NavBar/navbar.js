import React from 'react';
import classes from './navbar.css'
import 'react-sticky-header/styles.css';
import M from 'materialize-css';
import { NavLink } from 'react-router-dom';

class navBar extends React.Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    
  render(){
    const sideNavStyle = {
                      backgroundColor: 'white', 
                      color: '#003245',
                    }
    return(
      <div>
        <nav className={classes.Nav}>
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
            <NavLink to="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></NavLink>
            <div className={classes.Nav}>
              <ul id="slide-out" className="sidenav">
                <li><NavLink to="/" style={sideNavStyle} className="sidenav-close"><i style={sideNavStyle} className="material-icons">home</i>Inicio</NavLink></li>
                <li><NavLink to="/partes-list" style={sideNavStyle} className="sidenav-close"><i style={sideNavStyle} className="material-icons">people</i>Personal</NavLink></li>
                {!localStorage.getItem('token')
                  ? <li><NavLink to="/login" style={sideNavStyle} className="sidenav-close"><i style={sideNavStyle} className="material-icons">person</i>Log In</NavLink></li>
                  : <li><NavLink to="/logout" style={sideNavStyle} className="sidenav-close"><i style={sideNavStyle} className="material-icons">power_settings_new</i>Log Out</NavLink></li>
                }
              </ul>
            </div>
          </div>      
      </nav>  
      <p style={{padding: "20px"}}></p>
    </ div>
      
    )
  }
}

export default navBar;
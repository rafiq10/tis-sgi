import React from 'react';
import classes from './navbar.css'
import brandColors from '../CorporateBrand/colors.css'
import 'react-sticky-header/styles.css';
import powerOff from '../icons/Power_blanco.png'
import userIcon from '../icons/Usuario_blanco.png'
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
        <nav className={[classes.Nav, brandColors.Blue10].join(' ')}>
          <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo">
              {/* <i className="material-icons text-blue lighten-5">home</i> */}
              Inicio</NavLink>
            <ul className="right hide-on-med-and-down">
              {/* <li><NavLink to="/">
                <i className="material-icons">home</i>
                <i className="material-icons"></i>
                Inicio</NavLink></li> */}
              <li><NavLink to="/partes-list">
                <img  src={userIcon} alt="fireSpot" style={{height: "25px", width: "25px", padding: "2px", margin: "20px"}}></img>
                <i style={{height: '0'}} className="material-icons"></i>Personal</NavLink></li>
              {!localStorage.getItem('token')
                ? <li><NavLink to="/login">
                  <img  src={powerOff} alt="fireSpot" style={{height: "25px", width: "25px", padding: "2px", margin: "20px"}}></img>
                <i style={{height: '0'}} className="material-icons"></i>Log In</NavLink></li>
                : <li><NavLink to="/logout">
                  <img  src={powerOff} alt="fireSpot" style={{height: "25px", width: "25px", padding: "2px", margin: "20px"}}></img>
                  <i style={{height: '0'}} className="material-icons"></i>Log Out</NavLink></li>
              }
            </ul>
            <NavLink to="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></NavLink>
            <div className={classes.Nav}>
              <ul id="slide-out" className="sidenav">
                <li><NavLink to="/" style={sideNavStyle} className="sidenav-close"><i style={sideNavStyle} className="material-icons">home</i>Inicio</NavLink></li>
                <li><NavLink to="/partes-list" style={sideNavStyle} className="sidenav-close"><i style={sideNavStyle} className="material-icons">people</i>Personal</NavLink></li>
                {!localStorage.getItem('token')
                  ? <li><NavLink to="/login" style={sideNavStyle} className="sidenav-close">
                    <img  src={userIcon} alt="fireSpot" style={{height: "20px", width: "20px"}}></img>
                    <i style={sideNavStyle} className="material-icons"></i>
                    Log In</NavLink></li>
                  : <li><NavLink to="/logout" style={sideNavStyle} className="sidenav-close">
                    <img  src={powerOff} alt="fireSpot" style={{height: "20px", width: "20px", backgroundColor: "#2593B5"}}></img>
                    <i style={sideNavStyle} className="material-icons"></i>
                    Log Out</NavLink></li>
                }
              </ul>
            </div>
          </div>      
      </nav>  
      <p style={{paddingBottom: "20px"}}></p>
    </ div>
      
    )
  }
}

export default navBar;
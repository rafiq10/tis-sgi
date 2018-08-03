import React from 'react';
import logo from '../../logo.png';

const footer = () =>{
  const Footer = {
    color: 'white',
    backgroundColor: '#003245',
    padding: '50px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    height: '100px',
    width: '100%',
    zIndex: 1
  }
  const Phantom = {
    color: 'white',
    backgroundColor: 'transparent',
    padding: '50px',
    position: 'relative',
    left: '0',
    bottom: '0',
    height: '100px',
    width: '100%',
  }
  return(
    <div>
      <div style={Phantom}></div>
      <footer style={Footer} className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col s8 m9 l10 text-lighten-3">
            © 2018 SGI
            </div>
            <div className="col s4 m3 l2">
              <img src={logo} alt="tis" style={{height: '30px'}}/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )}

export default footer;
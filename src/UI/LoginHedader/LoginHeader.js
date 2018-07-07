import React from 'react';
import classes from './LoginHeader.css'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import logo from '../../logo.png'

const loginHeader = (props) =>{
  return(
    <StickyHeader
    header={<nav className={classes.Nav}>
              <div className="nav-wrapper ">
                <div className="brand-logo left">LOGIN</div>
                <div className="brand-logo right"><img src={logo} alt="x" height="40" /></div>
              </div>
            </nav>}
            ><p style={{padding: "20px"}}></p>
  </ StickyHeader>
    
  )
}

export default loginHeader;
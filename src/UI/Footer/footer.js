import React from 'react';
import StickyFooter from 'react-sticky-footer';
import logo from '../../logo.png'

const footer = () =>{
  return(
        <StickyFooter
            bottomThreshold={0}
            normalStyles={{
              backgroundColor: "#003245",
              color: "white",
              padding: "1.2rem"
            }}
            stickyStyles={{
              backgroundColor: "rgba(0, 50, 69, .9)",
              color: "white",
              padding: "1.2rem",
              width: "100%"
            }}
        >
          © 2018 SGI  
          <div className="row">
            <span className="col l10 m8 s6 offset-l10 offset-m8 offset-s5"><img src={logo} alt="x" height="40" /></span>
          </div>
        </StickyFooter>
  )

  
}

export default footer;
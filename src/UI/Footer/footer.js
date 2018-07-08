import React from 'react';
import StickyFooter from 'react-sticky-footer';
import logo from '../../logo.png'

const footer = () =>{
  return(
        <StickyFooter
            bottomThreshold={50}
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
          <div class="footer">
            <div class="text-lighten-3">
            © 2018 SGI
            </div>
            <div class="row">
              <span class="col l10 m8 s6 offset-l10 offset-m8 offset-s5"><img src={logo} style={{height: '30px'}}/></span>
            </div>
          </div>
        </StickyFooter>

  )

  
}

export default footer;
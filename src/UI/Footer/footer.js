import React from 'react';
import classes from './footer.css'
import logo from '../../logo.png'

const footer = (props) =>{
  return(
    <footer class={classes.Footer}>
      
    
    <div class="footer">
      <div class="text-lighten-3">
      © 2018 SGI
      </div>
      <div class="row">
        <span class="col l10 m8 s6 offset-l10 offset-m8 offset-s5"><img src={logo} /></span>
      </div>
    </div>
  </footer>
  )

  
}

export default footer;
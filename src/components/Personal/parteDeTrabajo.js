import React from 'react';
import {Link} from 'react-router-dom'
import classes from './font.css';
import calendarIcon from '../../UI/icons/Calendar.png'

const ParteDeTrabajo = (props) =>{
  return(
    <li style={classes.MyFont} key={props.ptId} className="collection-item">
      <div className="row">
        {/* <i style={{color: 'white',backgroundColor: 'rgba(0,0,0,0.7)'}} className="material-icons circle hide-on-small-only s0 l2">person</i> */}

        <div className="col s4 l2">
          <span style={{color: 'rgba(0,0,0,0.7)'}} className="title">{props.Firma_empleado}</span>
        </div>
        <div className="col s0 l2">
        <img  src={calendarIcon} alt="fireSpot" style={{height: "20%", width: "20%", marginTop: "5px",marginRight: "5px", left: "0"}}></img>
            {/* <i style={{color: 'rgba(0,0,0,0.7)'}} className="material-icons hide-on-small-only">today</i> */}
            {props.FechaContable.substring(0,10)} 
        </div>
        <div style={{color: 'rgba(0,0,0,0.7)'}} className="col s3 l2">
            Horas: {props.Horas} 
        </div>
        <div style={{color: 'rgb(255,123,0)'}} className="col s3 l2">
            {props.EstadoParte}
        </div>
        <div className="col l2">
          <Link to={"/detalle-parte/" + props.ptId} params={{ptId: props.ptId}}>
            <i id={props.ptId} style={{color: '#009966'}} className="material-icons small right waves-effect  waves-light s1  ">zoom_in</i>
          </Link>
        </div>
      </div>
    </li>
  )
}

export default ParteDeTrabajo;
import React from 'react';
import userIcon from '../../../UI/icons/Usuario_blanco.png'

const ParteDeTrabajo = (props) =>{
  return(

    <div style={{width: '100%'}} className="row">
      <div style={{width: '85%'}} className="col s12 m6">
        <div className='card'>
          <ul className="collection">
            <li key={props.ptId} className="collection-item avatar">
              <div className="row">
              <div className="col s16 m1 l1">
                <img  src={userIcon} alt="fireSpot" style={{height: "50px", width: "50px", padding: "5px", left: "0",backgroundColor: '#2593B5', borderRadius: '50%', borderWidth: '0'}}></img>
              </div>
                {/* <i style={{color: 'white',backgroundColor: '#980098'}} className="material-icons circle hide-on-small-only s0 l2">person</i>  */}
                <div className="col s12 m3 l2">
                  <span style={{color: 'rgba(0,0,0,0.7)'}} className="title">{props.pt.NbEmpleado}</span>
                </div>
              </div>
              <div className="row">
                <div style={{color: 'rgba(0,0,0,0.7)'}} className="col s12 m3 l3">
                    <strong>Pep general:</strong><br />
                    <span>{props.pt.PepGeneral} </span>
                </div>
                <div style={{color: 'rgba(0,0,0,0.7)'}} className="col s12 m3 l3">
                    <strong>Estado: </strong><br />
                    <span>{props.pt.estado}</span>
                </div>
                <div style={{color: 'rgba(0,0,0,0.7)'}} className="col s12 m3 l3">
                    <strong>Inicio del Periodo:</strong> <br />
                    <span>{String(props.pt.InicioPeriodo).substring(0,10)} </span>
                </div>
                <div style={{color: 'rgba(0,0,0,0.7)'}} className="col s12 m3 l3">
                    <strong>Fin del Periodo:</strong> <br />
                    <span>{String(props.pt.FinPeriodo).substring(0,10)} </span>
                </div>
              </div>
              <hr />
              <div className="row">
                <div style={{color: 'rgba(0,0,0,0.7)'}} className="col s12 m3 l3">
                    <strong>Tipo de Convenio:</strong> <br />
                    <span>{String(props.pt.Convenio_Experto).substring(0,10)} </span>
                </div>
                <div style={{color: 'rgba(0,0,0,0.7)'}} className="col s12 m3 l3">
                    <strong>Reduccion de Jornada:</strong> <br />
                    <span>{String(props.pt.Convenio_Experto).substring(0,10)} </span>
                </div>
                <div style={{color: 'rgba(0,0,0,0.7)'}} className="col s12 m3 l3">
                    <strong>Calendario:</strong> <br />
                    <span>{String(props.pt.Calendario_laboral).substring(0,10)} </span>
                </div>
                <div style={{color: 'rgba(0,0,0,0.7)'}} className="col s12 m3 l3">
                    <strong>Horas:</strong> <br />
                    <span>{String(props.pt.HorasParte)} </span>
                </div>
              </div>
              <hr />  
              <div className="row">
                <div style={{color: 'rgba(0,0,0,0.7)'}} className="col s12 m6 l6">
                    <strong>Dirección:</strong> <br />
                    <span>{props.pt.Direccion}</span>
                </div>
                <div style={{color: 'rgba(0,0,0,0.7)'}} className="col s12 m6 l6">
                  <strong>Gerencia:</strong> <br />
                  <span>{props.pt.Gerencia}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default ParteDeTrabajo;
import React from 'react';

const LinesList = (props) =>{

  let myNewParts = null
  let btnPresent = <div></div>
  if(props.estadoParte===4 && props.hoursNum === props.hoursSum){
    btnPresent = (
      <li className="collection-item right">
      <div className="input-field col s12 m6 l1">
          <button 
            style={{color: 'white',backgroundColor: "#0095A7"}} 
            className="btn waves-effect waves-light btn" 
            type="submit"
            onClick={props.onLinesPresent}
            >Presentar
            </button>
        </div>
      </li>
    )
  }


  myNewParts =props.listLines.map((p, idx) =>{
    const btn = (props.estadoParte===4 ?
      <div className="input-field col s12 m1 l1">
        <button 
          id={p.Id_Lin_parte} 
          style={{backgroundColor: '#0095A7'}} 
          className="waves-effect waves-light btn" 
          type="submit"
          onClick={()=>{onParteDelete(p.id,props)}} 
          >
          <i className="material-icons right center">delete</i>
        </button>
      </div>
      :
      <div className="col s12 m1 l1" />
    )
    return(
      <li key={idx} className="collection-item">
            <div className="row">
              <div className="col s12 m5 l3">
                  <strong>Pep:</strong><br />
                  <span>{p.PEP} </span>
              </div>
              <div className="col s12 m5 l3">
                  <strong>Expl. Empl:</strong><br />
                  <span>{p.explEmp} </span>
              </div>
              <div className="col s12 m5 l3">
                  <strong>Expl. Ger.:</strong><br />
                  <span>{p.explGer} </span>
              </div>
              <div className="col s12 m5 l2">
                  <strong>Horas:</strong><br />
                  <span>{p.hours} </span>
              </div>
              {btn}
            </div>
          </li>
      )
  })
  
  return(
    <div style={{width: '100%'}} className="row">
      <div style={{width: '85%'}} className="col s12 m6">
        <div className='card'>
          <ul  className="collection">
            {myNewParts}
            {btnPresent}
          </ul>

        </div>
      </div>
    </div>
  )
}

const onParteDelete = (id,props)=>{
  props.onLineDelete(id)
}

export default LinesList;
import React from 'react';

const ErrPage = (props) =>{
  return(

    <div className="col s12 m7">
      <h2 className="header">ERROR</h2>
      <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content" style={{color: "red"}}><h4>{props.errDescr}</h4></div>
      </div>
    </div>
  </div>
  )
  
}

export default ErrPage;
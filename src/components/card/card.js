import React from 'react'
const assets = require('../../img/assets');

const Card = (props) =>{
  const i=props.imgPath
  return(
    <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      
      <img className="activator" style={{width: '300px',height: '150px'}} src={assets[props.imgPath]}  />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{props.cardTitle}<i className="material-icons right">more_vert</i></span>
      {/* <p><a href="#">{props.cardTitle}</a></p> */}
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">{props.cardTitle}<i className="material-icons right">close</i></span>
      <p>{props.prodInfo}</p>
    </div>
  </div>
  )
}

export default Card;
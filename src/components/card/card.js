import React from 'react'
import styles from './card.css';

const assets = require('../../img/assets');

const Card = (props) =>{
  const i=props.imgPath
  return(
    <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      
      <img className="activator" style={{width: '600px'}} src={assets[props.imgPath]}  alt="tis"/>
    </div>
    <div style={styles.CardFont} className="card-content">
      <span style={styles.CardFont} className="card-title activator grey-text text-darken-4">{props.cardTitle}<i className="material-icons right">more_vert</i></span>
      {/* <p><a href="#">{props.cardTitle}</a></p> */}
    </div>
    <div style={styles.CardFont} className="card-reveal">
      <span style={styles.CardFont} className="card-title grey-text text-darken-4">{props.cardTitle}<i className="material-icons right">close</i></span>
      <p>{props.prodInfo}</p>
    </div>
  </div>
  )
}

export default Card;
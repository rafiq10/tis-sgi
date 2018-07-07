import React from 'react';
import axios from 'axios';
import NavBar from '../../../../UI/NavBar/navbar';

class PartesList extends React.Component {
  state = {
    listaPartes: [],
    isLoading: true,
    errDescr: null
  }
  
  componentDidMount(){
    const userTF = localStorage.getItem('userTF');
    const token = localStorage.getItem('token');

    axios.get('http://10.102.192.12:5000/api/partesTrabajoList/' + userTF, {headers: {'x-access-token': token}})
    .then(res =>{
      this.setState({listaPartes: res.data}) 
      this.setState({isLoading: false})
    })
    .catch((err)=>{
      console.log(err.response)
      this.setState({errDescr: err.response.status + ': ' + err.response.data.message})
    })
  }

  render(){
      let partes =null;
      let myTitle = (<h5>  loading partes de trabajo... </h5>);
      if((!this.state.isLoading) && !this.state.errDescr){
        console.log(this.state.listaPartes)
        myTitle = (<h3>Tus partes de trabajo</h3>)
        partes = this.state.listaPartes.map(p => {
          return(<li key={p.Id_Parte_Trabajo}>Empleado: {p.Firma_empleado}  ; Num horas: {p.Horas} ; Fecha Firma: {p.Fecha_firma_empleado.substring(0,10)} ; Estado Parte: {p.EstadoParte}</li>)
        })
      }else{
        partes = <h3 style={{color: 'red'}}>{this.state.errDescr}</h3>
        myTitle= null
      }
      return(
        <div className="container">
          <NavBar />
          <ul>{myTitle}{partes}</ul>
        </div>
    )
    }};


export default PartesList;
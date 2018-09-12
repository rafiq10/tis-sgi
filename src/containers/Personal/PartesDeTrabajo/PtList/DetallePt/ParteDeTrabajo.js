import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'

import ParteLineaForm from './AddParteLineaForm';
import ParteTrabajoInfo from '../../../../../components/Personal/detalleParteForm/ParteDeTrabajo'
import LinesList from '../../../../../components/Personal/detalleParteForm/PtLinesList';
import {SiteUrl} from '../../../../../Global'
class ParteDeTrabajo extends React.Component {

  state = {
    pt: {
      NbEmpleado: '',
      PepGeneral: '',
      estado: '',
      InicioPeriodo: '',
      FinPeriodo: '',
      Convenio_Experto: '',
      Calendario_laboral: '',
      HorasParte: '',
      Direccion: '',
      Gerencia: '',
      estadoNum: 0
    },
    listLines: [],
    hoursSum: 0,
  }

  api_base_url = SiteUrl
  checkOne = (a) =>{
    const token = localStorage.getItem('token');

    axios.post(this.api_base_url + 'detalleParte/' + this.props.match.params.id, 
      {
        PEP: a.selectedPep, 
        NumHours: a.hours, 
        suffix: '', 
        EmployeeComment: a.explEmp, 
      },
      {headers: 
        {
          'x-access-token': token
        }
      })
      .then(res => {
        window.location.reload()
      })
      .catch(err => {

      })      
  }

  onLineDelete = (id) =>{
    const token = localStorage.getItem('token');
    axios.delete(this.api_base_url + 'detalleParte/' + id, 
        {headers: 
          {'x-access-token': token}})
    .then( res => {
      withRouter.push(this.props.location.pathname)
    })
    .catch(err =>{

    })
  }

  onLinesPresent = () =>{
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');
    
    const myDate = new Date()
    const myYear = myDate.getFullYear().toString();
    const myMonth = myDate.getMonth().toString();
    const myDay = myDate.getDate().toString();
    const fechaFirma = myYear + '-' + myMonth + '-' + myDay

    console.log(this.props)
    
    axios.put(this.api_base_url + 'detalleParte/' + this.props.match.params.id, 
      {EstadoParte: 1, FirmaEmpleado: userName, Fecha_firma_empleado: fechaFirma},
      {headers: 
        {'x-access-token': token}})
    .then( res => {
      console.log(res)
      window.location.reload()
    })
    .catch(err =>{
      console.log(err)
    })
  }
  componentDidMount(){
    console.log(this.props)
    const token = localStorage.getItem('token');
    const myDate = new Date()


    axios.get(this.api_base_url + 'detalleParte/' + this.props.match.params.id, 
            {headers: 
              {'x-access-token': token}})
      .then( res => {
        let newPt =this.state.pt

        const newPtData = res.data[0]
        console.log(newPtData)
        newPt = {
          NbEmpleado: newPtData.NbEmpleado,
          PepGeneral: newPtData.PepGeneral,
          estado: newPtData.estado,
          InicioPeriodo: newPtData.InicioPeriodo,
          FinPeriodo: newPtData.FinPeriodo,
          Convenio_Experto: newPtData.Convenio_Experto,
          Calendario_laboral: newPtData.Calendario_laboral,
          HorasParte: newPtData.HorasParte,
          Direccion: newPtData.Direccion,
          Gerencia: newPtData.Gerencia,
          estadoNum: newPtData.idestado
        }

        this.setState({
          ...this.state,
          pt: newPt
        })

        })
      .catch(err =>{
        this.setState({...this.state,errDescr: err + ': ' + err})
      })

      axios.get(this.api_base_url + 'lineas-parte/' + this.props.match.params.id, 
                {headers: {'x-access-token': token}})
        .then(res=>{
          let newListLines = this.state.listLines
          let newHours = 0
          res.data.map(l=>{
            newListLines.push({
              id: l.Id_Lin_parte,
              PEP: l.PEP_Parte_Trabajo,
              suffix: l.Sufijo_proyesp,
              explEmp: l.ComentarioUsuario,
              explGer: l.ComentarioValidador,
              hours: l.Horas_Parte_Trabajo,
              status: l.Estado_parte_trabajo,
            })
            
            newHours = newHours + Number(l.Horas_Parte_Trabajo)
          })
          this.setState({
            ...this.state,
            listLines: newListLines,
            hoursSum: newHours,
          })
        })
        .catch(err=>{
          console.log(err)
        })
  }
  render(){
    console.log(this.state)
    return(
      <div style={{paddingLeft: '30px'}} className="constainer">
        <ParteTrabajoInfo 
          pt={this.state.pt}
        />
        <LinesList
          listLines={this.state.listLines}
          onLineDelete={this.onLineDelete}
          estadoParte={this.state.pt.estadoNum}
          hoursNum={this.state.pt.HorasParte}
          hoursSum={this.state.hoursSum}
          onLinesPresent={this.onLinesPresent}
        />
        {this.state.pt.estadoNum===4 ? 
        <ParteLineaForm 
        checkOne={this.checkOne}
        sumHours= {this.state.hoursSum}
        maxHours={this.state.pt.HorasParte}
        estadoParte={this.state.pt.estadoNum}
      />
      :
      <div />
        }

      </div>
    )}
}

export default ParteDeTrabajo;
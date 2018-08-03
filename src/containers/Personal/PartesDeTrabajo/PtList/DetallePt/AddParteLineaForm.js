import React from 'react';
import axios from 'axios';

import M from 'materialize-css';

class AddParteLineaForm extends React.Component{
  state = {
    pepList: [], 
    suffixList: [],
    defaultPEP: '',
    
    selectedPep: '',
    suffix: 'GRAL',
    errDescr: '',

    explEmp: '',
    explGer: '',
    hours: 0,

    maxHours: 0,
    isHoursValid: true,
  }

  onPepChangeHandle = (e) =>{
    const selectedPEP = e.target.value
    const selectedSuffix = this.state.suffixList[this.state.pepList.indexOf(e.target.value)]

    this.setState({
      ...this.state,
      selectedPep: selectedPEP,
      suffix: selectedSuffix
    })

  }

  explEmpChange=(e)=>{
    this.setState({
      ...this.state,
      explEmp: e.target.value
    })
  }

  explGerChange=(e)=>{
    this.setState({
      ...this.state,
      explGer: e.target.value
    })
  }

  hoursChange=(e)=>{
    this.setState({
      ...this.state,
      hours: Number(e.target.value)
    })
    this.isHoursValid(Number(e.target.value))
  }

  suffixChange=(e)=>{
    this.setState({
      ...this.state,
      suffix: e.target.value
    })
  }

  isHoursValid=(numHours)=>{
    if (this.props.sumHours +numHours <= this.props.maxHours ) {
      return true
    }else{
      return false
    }
  }

  submitParteLine=(e)=>{
    e.preventDefault();

    this.props.checkOne({
      selectedPep: this.state.selectedPep, 
      explEmp: this.state.explEmp,
      explGer: this.state.explGer,
      hours: this.state.hours,
      suffix: this.state.suffix,
    })
  }

  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('select');
      const instance = M.FormSelect.init(elems, null);
    });


    const userTF = localStorage.getItem('userTF');
    const token = localStorage.getItem('token');
    axios.get('http://10.102.192.12:5000/api/projects-list/' + userTF, 
            {headers: {'x-access-token': token}})
      .then( res => {
        let newPepList =this.state.pepList
        let newSuffixList = this.state.suffixList

        const myPEP = res.data[0].PepGeneral
        
        res.data.map((i,index) =>{
            newPepList.push(i.pep)
            newSuffixList.push(i.Sufijo)
        })
        this.setState({
          ...this.state,
          pepList: newPepList,
          defaultPEP: myPEP,
          selectedPep: myPEP
        })

        })
      .catch(err =>{
        this.setState({...this.state,errDescr: err + ': ' + err})
      })
  }

  render(){
    let myOps = this.state.pepList.map((op,index) =>{
      return(<option key={op} value={op}>{op}</option>)
    })
  
    let myStyle = {}
    let inputStyle = {}
    let hoursText = 'Horas'

    if (!this.isHoursValid(this.state.hours)) {
      myStyle = {
        color: 'red',
      }
      inputStyle = {
        color: 'red',
        borderBottom: '1px solid red',
        boxShadow:'0 1px 0 0 red',
      }
      hoursText = "Max horas: " + this.props.maxHours
    }

    return(
      <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12 m6 l2">
                <select defaultValue={this.state.defaultPEP} className="browser-default" onChange={this.onPepChangeHandle}>
                  <option value="" disabled defaultValue>{this.state.defaultPEP}</option>
                  {myOps}
                </select>
              </div>
              <div className="input-field col s12 m6 l1">
                <label onChange={this.suffixChange}>{this.state.suffix}</label>
              </div>
              <div className="input-field col s12 m6 l2">
                <input id="explicationE" type="text" className="validate" onChange={this.explEmpChange}/>
                <label htmlFor="explicationE">Explicación Empleado</label>
              </div>
              <div className="input-field col s12 m6 l2">
                <input id="explicationB" disabled="true" type="text" className="validate" onChange={this.explGerChange}/>
                <label htmlFor="explicationB">Explicación Gerente</label>
              </div>
              <div className="input-field col s12 m6 l1">
                <input id="horas" style={inputStyle} type="text" onChange={this.hoursChange} />
                <label htmlFor="horas" style={myStyle} 
                >{hoursText}</label>
              </div>
              <div className="input-field col s12 m6 l1">
                <button 
                  style={{backgroundColor: "#0095A7"}} 
                  className="waves-effect waves-light btn" 
                  valid="false"
                  type="submit"
                  disabled={!this.isHoursValid(this.state.hours)}
                  onClick={this.submitParteLine.bind(this)}
                  ><i className="material-icons center">add_box</i></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default AddParteLineaForm;
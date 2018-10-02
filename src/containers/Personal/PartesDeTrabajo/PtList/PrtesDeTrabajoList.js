import React from 'react';
import axios from 'axios';
import ParteDeTrabajo from '../../../../components/Personal/parteDeTrabajo';
import Login from '../../../Login/Login';
import {SiteUrl} from '../../../../Global'
import classes from '../../../../UI/fonts/fonts.css';

class PartesList extends React.Component {
  state = {
    listaPartes: [],
    isLoading: true,
    errDescr: null,
    currentPage: 1,
    itemsPerPage: 6,
    addButtonVisible: false,
  }

  componentDidMount(){
    const userTF = localStorage.getItem('userTF');
    const token = localStorage.getItem('token');

    axios.get(SiteUrl+'partesTrabajoList/' + userTF, {headers: {'x-access-token': token}})
    .then(res =>{
      this.setState({listaPartes: res.data}) 
      this.setState({isLoading: false})
      const myDateStr = String(this.state.listaPartes[0].FechaContable).substring(0,10)

      console.log(myDateStr.substring(5,7))
      const myDate = new Date(myDateStr.substring(0,4),myDateStr.substring(5,7),myDateStr.substring(9,10) )
      if(myDate<new Date()){
        this.setState({
          ...this.state,
          addButtonVisible: true
        })
      }else{
        this.setState({
          ...this.state,
          addButtonVisible: false
        })
      }
    })
    .catch((err)=>{
      console.log(err)
      this.setState({errDescr: err.response.status + ': ' + err.response.data.message})
    })
  }

  addedParteTrabajo = ()=>{
    const userTF = localStorage.getItem('userTF');
    const token = localStorage.getItem('token');
    console.log(token)
    axios.post(SiteUrl+'partesTrabajoList/' + userTF,{},{headers: {'x-access-token': token}})
      .then(res=>{
        window.location.reload()
      })
      .catch(err=>{
        console.log(err)
      })
  }

  onPageNumClickHandle = (event) => {
    this.setState ({
      currentPage: Number(event.target.id)
    })
  }

  onLeftPaginationClickHandle = () => {
    const iniCurrPage = this.state.currentPage
    let currPg = iniCurrPage
    if (iniCurrPage === 0) {
      currPg=0
    }else
    {
      currPg - 1
    }
    this.setState ({
      currentPage: currPg
    })
  }

  onRightPaginationClickHandle = () => {

    const iniCurrPage = this.state.currentPage
    let currPg = iniCurrPage
    if (iniCurrPage === Math.ceil(this.state.listaPartes.length / this.state.itemsPerPage)) {
      currPg = Math.ceil(this.state.listaPartes.length / this.state.itemsPerPage)
    }else
    {
      currPg + 1
    }
    this.setState ({
      currentPage: currPg
    })
    
  }

  getRightArrowClass = ()=>{
    let myClass = null;

    if (this.state.currentPage < Math.ceil(this.state.listaPartes.length / this.state.itemsPerPage)) {
      myClass = "waves-effect"
    }else{
      myClass = "disabled"
    }
    return myClass;
  }

  isLeftArrowActive = ()=>{
    return (this.state.currentPage > 1)
  }

  render(){
    const token = localStorage.getItem('token')
    const expiresIn = new Date(localStorage.getItem('expiresIn'));

    let pageNumbers = [];
    let renderPartes = null
    let renderPageNumbers= null
    let partes =null;

    let myTitle = (<h5>  loading partes de trabajo... </h5>);
    if((!this.state.isLoading) && !this.state.errDescr){
      let todos= this.state.listaPartes
      let currentPage = this.state.currentPage
      let todosPerPage = this.state.itemsPerPage;
      
      // Logic for displaying todos
      let indexOfLastTodo = currentPage * todosPerPage;
      let indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      let currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    renderPartes = currentTodos.map((p, index) => {
      return (<ParteDeTrabajo
                key={index}
                ptId={p.Id_Parte_Trabajo}
                Firma_empleado={p.Firma_empleado}
                Horas={p.Horas}
                FechaContable={p.FechaContable}
                EstadoParte={p.Estado}
                EstadoNum={p.EstadoParte}
              >
              </ParteDeTrabajo>);
    });
    
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);  
    }

    renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.onPageNumClickHandle}
          style={{margin: '5px'}}
          className={this.state.currentPage==={number} ? "active" : "waves-effect"}
        >
          {number}
        </li>
      );
    });

      myTitle = (this.state.addButtonVisible===true
                ?
                <div>
                  <h3 style={classes.tlfFont}>Tus partes de trabajo</h3>
                  <div className="input-field col s12 m6 l2">
                    <button 
                      style={{backgroundColor: "#005466"}} 
                      className="waves-effect waves-light btn" 
                      valid="false"
                      type="submit"
                      disabled={this.isHoursValid}
                      onClick={this.addedParteTrabajo}
                      ><i className="material-icons right">add_box</i>Añade parte</button>
                  </div>
                </div>
                :
                <div />
      )
      partes = this.state.listaPartes.map((p,index) => {
        return(
                <ParteDeTrabajo
                  key={index}
                  ptId={p.Id_Parte_Trabajo}
                  Firma_empleado={p.Firma_empleado}
                  Horas={p.Horas}
                  FechaContable={p.FechaContable}
                  EstadoParte={p.Estado}
                  EstadoNum={p.EstadoParte}
                >
                </ParteDeTrabajo>
      )
      })
    }else{
      partes = <h3 style={{color: 'red'}}>{this.state.errDescr}</h3>
      myTitle= null
    }

    return(
      

      <div className="container">
        {!token || (expiresIn < new Date())
        ? <Login />
        :
        <div>
          <ul className="collection with-header">
            <li key="0" className="collection-header">{myTitle}</li>
            {renderPartes}
          </ul>
          <ul id="page-numbers" className="pagination large">
            {/* <li  className="waves-effect" onClick={this.onLeftPaginationClickHandle}><a><i className="material-icons">chevron_left</i></a></li> */}
            {renderPageNumbers}
            {/* <li className={this.getRightArrowClass} onClick={this.onRightPaginationClickHandle}><a><i className="material-icons">chevron_right</i></a></li> */}
          </ul>
        </div>}
      </div>
    )
    }};


export default PartesList;
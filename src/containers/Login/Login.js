import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import https from 'https';
import request from 'request';

import M from 'materialize-css';
import * as actions from '../../store/actions/index'
import LoginHeader from '../../UI/LoginHedader/LoginHeader';
import Spinner from '../../UI/Spinner/Spinner';
import ErrPage from '../../UI/Error/Error';
import {SiteUrl} from '../../Global';

import userIcon from '../../UI/icons/Usuario_blanco.png'
import pwdIcon from '../../UI/icons/Seguridad_blanco.png'
import mundoIcon from '../../UI/icons/Internet_blanco.png'

class login extends React.Component{

  state = {
    user: '',
    password: '',
    token: '',
    isLoading: false,
    countries: [],
    country: "ESP"
  }

  defaultCountry = "ESP"
  inputStyle = {color: '#005466',
                    borderBottom: "1px solid #005466",
                    boxShadow: "0 1px 0 0 #005466",
                  }

  labelStyle = {color: '#005466'}

  selectStyle = {selectDropdowBorderBottom: 'none'}

  submitFormHandler = (event)=>{
    event.preventDefault();
    console.log(this.state.country)
    this.props.onAuth(this.state.user,this.state.password, this.state.country)
  }

  onSelectChange = (e)=>{
    this.setState({
      ...this.state,
      country: e.target.value
    })
    localStorage.setItem('country', e.target.value)
  }

  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, null);
    });

    localStorage.setItem('country', this.defaultCountry)
    const agent = new https.Agent({  
      rejectUnauthorized: false
    });


    request.get({
      "encoding":"utf-8",
      "method":"GET",
      "uri":SiteUrl + "countries-list/",
      "followRedirect":false
    }, function (err, res, body) {
      console.log(err);
      console.log(res.statusCode);
      console.log(body);
    });


    axios.get(SiteUrl+'countries-list/', {httpsAgent: agent,headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
      .then(res =>{
        let myCountries = []
        
        res.data.map(c => {
          myCountries.push(c.countryShort)
        })
        this.setState({
          ...this.state,
          countries: myCountries
        })
      })
      .catch(err=>{
        console.log(err)
      })

  }

  render(){
    let myCountries = this.state.countries.map((c,idx) => {
      return(<option key={c} value={c}>{c}</option>)
    })

    let MyForm = (<form className="col s12" onSubmit={this.submitFormHandler.bind(this)}>
                    <div className="row">
                      <div className="input-field col s1 m1 l1">
                        <img  src={userIcon} alt="fireSpot" style={{height: "25px", width: "25px", marginTop: "10px",marginRight: "10px", left: "0",backgroundColor: '#005466', padding:"2px"}}></img>
                      </div>
                        <div className="input-field col s8 m5 l3">
                          
                          {/* <i style={this.labelStyle} className="material-icons prefix">account_box</i> */}
                          <input id="user" 
                                style={this.inputStyle} 
                                type="text"
                                autoComplete="UserTF"
                                className="validate"
                                onChange={usr => this.setState({user: usr.target.value})}
                                />
                          <label htmlFor="user" style={this.labelStyle}>TF</label>
                        </div>
                      </div>
                    <div className="row">
                      <div className="input-field col s1 m1 l1">
                        <img  src={pwdIcon} alt="fireSpot" style={{height: "25px", width: "25px", marginTop: "10px",marginRight: "10px", left: "0",backgroundColor: '#005466', padding:"2px"}}></img>
                      </div>
                      <div className="input-field col s8 m5 l3 color: #000">
                        <input id="pwd" 
                                style={this.inputStyle}
                                type="password"
                                autoComplete="new-password"
                                className="validate"
                                onChange={pwd => this.setState({password: pwd.target.value})}
                                />
                        <label htmlFor="pwd" style={this.labelStyle}>Clave</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s1 m1 l1">
                        <img  src={mundoIcon} alt="fireSpot" style={{height: "25px", width: "25px", marginTop: "10px",marginRight: "10px", left: "0",backgroundColor: '#005466', padding:"2px"}}></img>
                      </div>
                    <div className="input-field col s12 m6 l2">
                      <select onChange={this.onSelectChange} defaultValue={this.defaultCountry} style={{marginLeft: '50px', width: '210px', color: '#005466'}} className="browser-default">
                        {myCountries}
                      </select>
                    </div>
                    </div>
                    <div className="row">
                      <button 
                        style={{backgroundColor: "#005466"}} 
                        className="waves-effect waves-light btn" 
                        type="submit"
                        ><i className="material-icons right">send</i>Entrar</button>
                    </div>
                  </form>)

    let MyErr = null;
    if(this.props.isLoading){
      console.log(this.props)
      MyForm=<Spinner />
    }

    if (this.props.error){
      MyForm = null
      MyErr = <ErrPage errDescr={this.props.error.message}/>
    }

    let authRedirect = null;
    if(this.props.isAuthenticated){
      authRedirect = <Redirect to="/" />
    }
    return(
      <div className="container">
        {authRedirect}
        <LoginHeader />
        {MyErr}
        {MyForm}
        <div>{this.props.isLoading}</div>
  </div>
    )
  }
}

const mapsStateToProps = state =>{
  return{
    token: state.auth.token,
    userTF: state.auth.userTF,
    userName: state.auth.YserName,
    error: state.auth.error,
    isLoading: state.auth.isLoading,
    country: state.auth.country,
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    
    onAuth: (user,password, country) => {
      console.log(country)
      dispatch(actions.auth ({user,password, country}))

    }
  }

}

export default connect(mapsStateToProps,mapDispatchToProps)(login)
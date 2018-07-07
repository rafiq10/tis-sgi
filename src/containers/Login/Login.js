import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/index'
import LoginHeader from '../../UI/LoginHedader/LoginHeader';
import Spinner from '../../UI/Spinner/Spinner';
import ErrPage from '../../UI/Error/Error';

class login extends React.Component{

  state = {
    user: '',
    password: '',
    token: '',
    isLoading: false
  }

  inputStyle = {color: '#005466',
                    borderBottom: "1px solid #005466",
                    boxShadow: "0 1px 0 0 #005466",
                  }

  labelStyle = {color: '#005466'}

  submitFormHandler = (event)=>{
    event.preventDefault();
    this.props.onAuth(this.state.user,this.state.password)
  }

  

  render(){
    let MyForm = (<form className="col s12" onSubmit={this.submitFormHandler.bind(this)}>
                    <div className="row">
                        <div className="input-field col s8 m5 l3">
                          <i style={this.labelStyle} className="material-icons prefix">account_box</i>
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
                      <div className="input-field col s8 m5 l3 color: #000">
                        <i style={this.labelStyle} className="material-icons prefix">keyboard</i>
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
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    onAuth: (user,password) => dispatch(actions.auth ({user,password}))
  }

}

export default connect(mapsStateToProps,mapDispatchToProps)(login)
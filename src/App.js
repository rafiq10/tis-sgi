import React, { Component } from 'react';
import {Redirect, Switch,Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions/index';

import Main from './containers/Main/Main';
import Login from './containers/Login/Login';
import Logout from './containers/Login/Logout';
import Partes from './containers/Personal/PartesDeTrabajo/PtList/PrtesDeTrabajoList';


class App extends Component {
  render() {
    let routes = (
      <div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Main} />
      </div>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/partes-list" component={Partes} />
          <Route exact path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
      )
    }
    return (
        <div>
        {routes}
        </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    isAuthenticated: localStorage.getItem('token') !== null
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps) (App));

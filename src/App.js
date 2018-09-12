import React, { Component } from 'react';
import {Redirect, Switch,Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions/index';

import Main from './containers/Main/Main';
import Login from './containers/Login/Login';
import Logout from './containers/Login/Logout';
import Partes from './containers/Personal/PartesDeTrabajo/PtList/PrtesDeTrabajoList';
import DetalleParte from './containers/Personal/PartesDeTrabajo/PtList/DetallePt/ParteDeTrabajo';

import Infinite from 'react-infinite';
import {Header,Footer} from './UI/index';

class App extends Component {
  state = { 
    width: 0,
    height: 0 
  };

componentDidMount() {
this.updateWindowDimensions();
window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions = () => {
this.setState({width: window.innerWidth, height: window.innerHeight})
}

  render() {
    let routes = (
      <div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Main} />
      </div>
    )

      routes = (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/partes-list" component={Partes} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/detalle-parte/:id" component={DetalleParte} />
          <Route path="/" component={Main} />
          <Redirect to="/login" />
        </Switch>
      )

    return (
      <div>
        {/* <Infinite containerHeight={window.innerHeight} elementHeight={200}> */}
          <Header />
            {routes}
          <Footer />
        {/* </Infinite> */}
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

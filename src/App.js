import React, { Component, Fragment } from 'react';
import {Header,Footer, Layout} from './UI/index';
import logo from './logo.png'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h3>Bienvenido a SGI</h3>
        <Layout />
        <Footer />

      </Fragment>
    );
  }
}

export default App;

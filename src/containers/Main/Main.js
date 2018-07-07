import React, { Component } from 'react';
import {Header,Footer, Layout} from '../../UI/index';
import Login from '../Login/Login';

class Main extends Component {
  render() {
    const token = localStorage.getItem('token')
    return (
      <div>
        {!token
          ? <Login />
          : <div><Header /> <main ><h3>Bienvenido a SGI</h3><Layout /></main><Footer /></div>
        }        
      </div>
    );
  }
}

export default Main;
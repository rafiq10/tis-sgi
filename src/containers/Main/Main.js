import React, { Component } from 'react';
import Login from '../Login/Login';
import Card from '../../components/card/card';


class Main extends Component {

  render() {
    const token = localStorage.getItem('token')
    const expiresIn = new Date(localStorage.getItem('expiresIn'));
    return (
      <div>
        {!token || (expiresIn < new Date())
          ? <Login />
          : <div>
              <div  className='row'>
                <div className='col l12'>
                  <Card 
                    imgPath='corporativos'
                    cardTitle='Nuestra Misión'
                    prodInfo='Hacemos del mundo un lugar más seguro, aportando soluciones que protegen vidas, bienes y que garantizan los servicios esenciales para la sociedad; dando continuidad a los negocios. '
                  />
                </div>
              </div>
            </div>
        }        
      </div>
    
    );
  }
}

export default Main;
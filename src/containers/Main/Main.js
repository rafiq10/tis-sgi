import React, { Component } from 'react';
import {Header,Footer} from '../../UI/index';
import Login from '../Login/Login';
import Card from '../../components/card/card';
import Infinite from 'react-infinite';


class Main extends Component {

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
    const token = localStorage.getItem('token')
    return (
      <Infinite containerHeight={window.innerHeight} elementHeight={200}>
        {!token
          ? <Login />
          : <div>
            <Header /> 
            <div  className='row'>
            <div className='col l6'>
            <Card 
              
              imgPath='coworkers'
              cardTitle='Coworking'
              prodInfo='Trabajamos como un sistema global y colaborativo con la finalidad trasladar al cliente una experiencia y un servicio inigualable, manteniendo siempre una actitud cercana y amable ante cualquier situación. '
            />
            </div>
            <div className='col l6'>
            <Card 
              imgPath='corporativos'
              cardTitle='Corporativo'
              prodInfo='Yendo siempre un paso por delante, innovamos para ofrecer soluciones novedosas y adaptadas a las necesidades de cada cliente. Transformarnos a la vez que lo hace el mercado es la mejor forma de cumplir las expectativas y demostrar quiénes somos. '
            />
            </div>
            <div className='col l6'>
            <Card 
              className='col l6'
              imgPath='farmers'
              cardTitle='Ayudamos'
              prodInfo='Disponemos de los mejores profesionales cualificados y expertos en ofrecer una calidad de servicio basada en la excelencia. Este es nuestro compromiso: mantener una relación óptima con el cliente cuidando cada detalle y ofreciendo resultados satisfactorios. '
            />
            </div>
            <div className='col l6'>
            <Card 
              className='col l6'
              imgPath='peru'
              cardTitle='Peru'
              prodInfo='Estamos tb en Peru'
            />
            </div>
            <div className='col l6'>
            <Card 
              className='col l6'
              imgPath='peru'
              cardTitle='Peru'
              prodInfo='Estamos tb en Peru'
            />
            </div>
            <div className='col l6'>
            <Card 
              className='col l6'
              imgPath='peru'
              cardTitle='Peru'
              prodInfo='Estamos tb en Peru'
            />
            </div>
            </div>
            <Footer />
            </div>
        }        
      
      </Infinite>
    );
  }
}

export default Main;
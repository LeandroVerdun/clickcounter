import React from 'react';
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import redAngelLogo from './imagenes/redengel7.1.png';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClic: 0
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);

  }
  manejarClic() {
    this.setState(({ numClic }) => ({ numClic: numClic + 1 }));
  }
  reiniciarContador() {
    this.setState({ numClic: 0 })
  }

  render() {
    return (
      <div className="App">
        <div className='Red-Angel-logo-contenedor'>
          <img 
          className='Red-Angel-logo'
          src={redAngelLogo}
          alt='logo de Red Angel'/>
  
        </div>
        <div className='contenedor-principal'>
          <Contador numClic={this.state.numClic} />
          <Boton 
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={this.manejarClic}/>
          <Boton 
          texto="Reinciar"
          esBotonDeClic={false}
          manejarClic={this.reiniciarContador}/>
  
        </div>
        
      </div>
    );

  }
}



export default App;

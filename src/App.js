import React from 'react';
import './App.scss';
import PokeList from './PokeList';
import { pokemons } from './pokemons';

// 1-Añadir un click a Pokemon que: marca o desmarca el pokemon como favorito en el array del estado de App.
// 2-Pasar este dato al componente Pokemon por props
// 3-Pintar Pokemon con otros estilos cuando por props nos llegue la info de que el pokemon es favorito

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: pokemons,
      id: ''
    }
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(event){ 
    const currentId = event.currentTarget.id;
    this.setState({
      id: currentId
    })

  }
  render() {
    return (
      <div className="App">
        <h1 className="app__title">Mi lista de pokemon</h1>
        <PokeList pokemons={this.state.pokemons} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;

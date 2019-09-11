import React from 'react';
import './App.scss';
import PokeList from './PokeList';
import { pokemons } from './pokemons';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: pokemons
    }
  }
  render() {
    return (
      <div className="App">
        <PokeList pokemons={this.state.pokemons}/>
      </div>
    );
  }
}

export default App;

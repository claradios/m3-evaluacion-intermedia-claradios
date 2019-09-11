import React from 'react';
import './App.css';
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
        <ul className="pokemon__list">
          {this.state.pokemons.map((pokemon, index) => {
            return (
              <li className="pokemon__item" key={index}>
                <div className="pokemon__item-containter">
                  <div>{pokemon.name}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;

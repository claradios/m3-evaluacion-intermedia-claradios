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
              <li className="pokemon__item" key={pokemon.id}>
                <div className="pokemon__item-containter">
                  <div className="item__pic-container">
                    <img className="item__pic" src={pokemon.url} alt={pokemon.name} />
                  </div>
                  <h2 className="item__title">{pokemon.name}</h2>
                  <ul>
                    {pokemon.types.map((type,index)=>{
                      return (
                        <li key={index}>
                          <div className="item__type-container">
                            {type}
                          </div>
                        </li>
                      )
                    })}
                  </ul>
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

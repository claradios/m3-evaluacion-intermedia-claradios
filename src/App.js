import React from 'react';
import './App.scss';
import PokeList from './PokeList';
import { pokemons } from './pokemons';


// 3-Pintar Pokemon con otros estilos cuando por props nos llegue la info de que el pokemon es favorito

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: pokemons,
      id: '',
      favs:[]
    }
      this.getFavPokemon = this.getFavPokemon.bind(this);
      this.isFav = this.isFav.bind(this);
  }


  getFavPokemon(event) {
    const favID = parseInt(event.currentTarget.id);
    const futureFav = this.state.pokemons.find(item => item.id === favID);

    this.setState(prevState => {
      const newFavs = [...prevState.favs];
      const result = newFavs.findIndex(item => item.id === favID);

      if (result < 0 ) {
        newFavs.push(futureFav);
      } else {
        newFavs.splice(result,1);
      }
      localStorage.setItem('favs', JSON.stringify(newFavs));
      return {
        favs: newFavs
      }
    });
  }

  isFav(pokemonID) {
    const {favs} = this.state;
    const result = favs.findIndex(item => item.id === pokemonID);

    if (result < 0 ) {
      return '';
    } else {
      return 'item__fav';
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1 className="app__title">Mi lista de pokemon</h1>
        <PokeList pokemons={this.state.pokemons} handleClick={this.getFavPokemon} isFav={this.isFav}/>
      </div>
    );
  }
}

export default App;

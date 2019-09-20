import React from 'react';
import './App.scss';
import PokeList from './PokeList';
import{fetchPokemones} from './services/fetchPokemones'
// import { pokemons } from './pokemons';



// 3-Pintar Pokemon con otros estilos cuando por props nos llegue la info de que el pokemon es favorito

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      id: '',
      favs:[],
      value: ''
    }
      this.getInput = this.getInput.bind(this);
      this.getFavPokemon = this.getFavPokemon.bind(this);
      this.isFav = this.isFav.bind(this);
  }
  componentDidMount(){
    this.getPokemones();
  }
  getPokemones(){
    fetchPokemones()
    .then(data=>{
      this.setState({
        pokemons:data
      })
    })
  }
  getInput(event) {
    const value = event.currentTarget.value;
    console.log(value);
    this.setState(
      {
      value: value
    })
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
    const {pokemons} = this.state;
    return (
      <div className="App">
        <h1 className="app__title">Mi lista de pokemon</h1>
        <PokeList value={pokemons.value} getInput={this.getInput} pokemons={pokemons} handleClick={this.getFavPokemon} isFav={this.isFav}/>
      </div>
    );
  }
}

export default App;

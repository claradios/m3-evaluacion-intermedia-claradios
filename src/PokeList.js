import React from 'react';
import PropTypes from 'prop-types';
import './PokeList.scss';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
    render() {
        return (
            <ol className="pokemon__list" >
                {this.props.pokemons.map(pokemon => {
                    return (
                        <li  className="pokemon__item " key={pokemon.id} >
                            <Pokemon isFav = {this.props.isFav} handleClick={this.props.handleClick} id={pokemon.id} url={pokemon.url} name={pokemon.name} types={pokemon.types} />
                        </li>
                    )
                })}
            </ol>

        );
    }
}

PokeList.propTypes = {
    isFav: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  
export default PokeList;




import React from 'react';
import PropTypes from 'prop-types';
import './PokeList.scss';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
    render() {
        return (
            <ul className="pokemon__list">
                {this.props.pokemons.map(pokemon => {
                    return (
                        <li className="pokemon__item" key={pokemon.id}>
                            <Pokemon url={pokemon.url} name={pokemon.name} types={pokemon.types} />
                        </li>
                    )
                })}
            </ul>

        );
    }
}

PokeList.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.object)
  }
  
export default PokeList;




import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
    render() {
        return (
            <ul className="pokemon__list">
                {this.props.pokemons.map((pokemon, index) => {
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

export default PokeList;




import React from 'react';
import PropTypes from 'prop-types';
import './PokeList.scss';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
    render() {
       console.log(this.props.value);
        return (
            <React.Fragment>
                <input type="text" onChange={this.props.getInput}></input>
                <ol className="pokemon__list" >
                    {this.props.pokemons
                    .filter(pokemon=>pokemon.name.includes(this.props.value))
                    .map(pokemon => {
                        return (
                            <li className="pokemon__item " key={pokemon.id} >
                                <Pokemon isFav={this.props.isFav} handleClick={this.props.handleClick} id={pokemon.id} url={pokemon.url} name={pokemon.name} types={pokemon.types} />
                            </li>
                        )
                    })}
                </ol>
            </React.Fragment>


        );
    }
}

PokeList.propTypes = {
    isFav: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.string.isRequired
}

export default PokeList;




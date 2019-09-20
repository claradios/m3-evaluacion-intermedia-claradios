import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.scss';

class Pokemon extends React.Component {
    render() {
        
        return (
            <div onClick= {this.props.handleClick}  id={this.props.id} className={`pokemon__item-containter ${this.props.isFav(this.props.id)}`} >
                <div className="item__pic-container">
                    <img className="item__pic" src={this.props.url} alt={`vista frontal de ${this.props.name}`} />
                </div>
                <h2 className="item__title">{this.props.name}</h2>
                <ul className="type__list">
                    {this.props.types.map((type, index) => {
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
        );
    }
}

Pokemon.propTypes = {
    isFav: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired
  }

export default Pokemon;

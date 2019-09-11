import React from 'react';

class Pokemon extends React.Component {
    render() {
        return (
            <div className="pokemon__item-containter">
                <div className="item__pic-container">
                    <img className="item__pic" src={this.props.url} alt={this.props.name} />
                </div>
                <h2 className="item__title">{this.props.name}</h2>
                <ul>
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

export default Pokemon;

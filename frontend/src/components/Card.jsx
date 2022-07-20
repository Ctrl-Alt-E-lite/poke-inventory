// Basic Card template

import React from "react";

import LinkButton from './LinkButton';

function Card({pokemon, includeDescription}) {
    return (
        <div className='card'>
            <div className="card-title">
                <h3>{item.title}</h3>
            </div>
            <div className="card-image">
                <img src={[pokemon.image]} alt={pokemon.title} />
            </div>
            <div className="card-content">
                {includeDescription && pokemon.description}
            </div>
            <div className="card-actions">
                <LinkButton to={`pokedex/${pokemon.pokedex}` text={'Stats'}}/>
            </div>
        </div>
    )
}

export default Card;
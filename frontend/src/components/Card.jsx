<<<<<<< Updated upstream
=======
// Basic Card template

import React from "react";

import LinkButton from './LinkButton';

function Card({pokemon, includeDescription}) {
    return (
        <div className='card'>
            <div className="card-pokemon">
                <h3>{pokemon.name}</h3>
            </div>
            <div className="card-image">
                <img src={[pokemon.image]} alt={pokemon.name} />
            </div>
            <div className="card-content">
                {includeDescription && pokemon.base}
            </div>
            <div className="card-actions">
                <LinkButton to={`pokedex/${pokemon.pokedex}` text={'Stats'}} />
            </div>
        </div>
    )
}

export default Card;
>>>>>>> Stashed changes

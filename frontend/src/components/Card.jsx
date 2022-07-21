import React from 'react';

function Card({pokemon, includeDescription}) {
  return (
    <div className='card'>
      <div className="card-title">
        <h3>{pokemon.name}</h3>
      </div>
      <div className="card-image">
        <img src={pokemon.image} alt={pokemon.name}/>
      </div>
      <div className="card-content">
        {includeDescription && pokemon.description}
      </div>
      </div>
  )
}

export default Card;


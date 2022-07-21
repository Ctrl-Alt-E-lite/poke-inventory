// Individual Pokedex Entry Card

// Name
// Image
// Stats

import React from 'react';
import { Link } from 'react-router-dom';

function Card({pokemon}) {
  return (
    <div className='card'>
      <h3>Product:</h3>
      <h4>{pokemon.name}</h4>
      <img src={pokemon.image} alt={pokemon.name}/>
      <p>{pokemon.base}</p>
      <Link to={`/pokedex/${pokemon.pokedex}`}>View Details</Link>
    </div>
  )
}

export default Card;
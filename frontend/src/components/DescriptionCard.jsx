import React from 'react';

function DescriptionCard ({pokemon, includeDescription}) {
  return (
    <div className='description-card'>
      <div className="description-card-title">
        <h3>{pokemon.name}</h3>
      </div>
      <div className="description-card-image">
        <img src={pokemon.image} alt={pokemon.name}/>
      </div>
      <div className="description-card-content">
        {includeDescription && pokemon.description}
      </div>
      <div className="description-card-actions">
        <link to={`/`} text={'Back'}/>
      </div>
    </div>
  )
}

export default DescriptionCard;

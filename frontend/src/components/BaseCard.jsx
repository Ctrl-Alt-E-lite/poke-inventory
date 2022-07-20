// Base info for Pokemon by Pokedex #

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LinkButton from './LinkButton';

function baseCard ({pokemon, includeBase}) {

  const navigate = useNavigate();

  const deletePokemon = async ({pokemon.pokedex}) => {
    if(window.confirm('Are you sure you want to remove this pokemon from your team?')) {

      try {
        console.log('DELETE!');
        const response = await fetch(`http://localhost:5000/api/teams/:teamId/${pokemon.pokedex}`, {
        method: 'DELETE',
        headers: {
          'SameSite': 'None'
        }
      });
      const data = await response.json();

      console.log('Pokemon removed!', data);
      navigate('/');
      toast.success('Pokemon was successfully removed!');

      } catch (error) {
        console.log(error.message);
        toast.error(`Pokemon was not removed - error: ${error.message}`);
      }
      
    }
  }

  return (
    <div className='base-card'>
      <div className="base-card-title">
        <h3>{pokemon.title}</h3>
      </div>
      <div className='base-card-price'>{`$ ${pokemon.price}`}</div>
      <div className="base-card-image">
        <img src={pokemon.image} alt={pokemon.title}/>
      </div>
      <div className="base-card-content">
        {includeBase && pokemon.base}
      </div>
      <div className="base-card-actions">
        <LinkButton to={`/`} text={'Back'}/>
        <button className='link-btn-delete' 
          onClick={() => deletePokemon(pokemon.pokedex)}
          >
            Delete
          </button>
      </div>
    </div>
  )
}

export default baseCard;

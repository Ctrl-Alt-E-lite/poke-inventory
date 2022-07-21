// Base info for Pokemon by Pokedex #

import React from 'react';
<<<<<<< HEAD
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> 51424b87d080b257cc76ca5f009586a9c0bf98fb
import LinkButton from './LinkButton';

function baseCard ({pokemon, includeBase}) {

  const deletePokemon = async function ({ pokemon, pokedex }) {
    if (window.confirm('Are you sure you want to remove this pokemon from your team?')) {

      try {
        console.log('DELETE!');
        const response = await fetch(`http://localhost:3000/api/teams/:teamId/${pokemon.pokedex}`, {
          method: 'DELETE',
          headers: {
            'SameSite': 'None'
          }
        });
        const data = await response.json();

        console.log('Pokemon removed!', data);
<<<<<<< HEAD
        // navigate('/');
      } catch (error) {
        console.log(error.message);
=======
        navigate('/');

      } catch (error) {
        console.log(error.message);
  
>>>>>>> 51424b87d080b257cc76ca5f009586a9c0bf98fb
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

// Page for specific pokemon
import React from "react";
import styled from "styled-components";
// Show Name, Pokedex #, Image and Type(s) 

function Pokemon ({pokemon, pokedex}) {
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
    
          } catch (error) {
            console.log(error.message);
      
          }
    
        }
      }
    return (
        <div >
            <div >
                <h3>{pokemon.title}</h3>
            </div>
            <div >
                <img src={pokemon.img} alt={pokemon.title}/>
            </div>
            <div>
                {/* {includeBase && pokemon.base} */}
            </div>
            <div >
                <a href='/' text={'Back'}/>
            <button  
                onClick={() => deletePokemon(pokemon.pokedex)}
                >
                Delete
                </button>
        </div>
      </div>
    )
}

export default Pokemon;
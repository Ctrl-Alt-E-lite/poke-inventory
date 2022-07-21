// Page for specific pokemon

// Show Name, Pokedex #, Image and Type(s) 

import React, {useState, useEffect}  from 'react'; 
import { useParams } from 'react-router-dom';

import DescriptionCard from '../components/DescriptionCard'

function Pokemon() {

    const {pokedex} = useParams();

    const [ pokemon, setPokemon ] = useState({});

    const getPokemon = async ({pokedex}) => {
        const response = await fetch(`http://localhost:5000/api/pokemon/${pokemon.pokedex}`);

        const data = await response.json();

        console.log(data.pokemon);

        setPokemon(data.pokemon);
    }

    useEffect(() => {
        getPokemon(pokedex);
    }, [pokedex]);



  return (
    <div className='pokemon'>
      <h1>Pokemon Details:</h1>
      <div>
        {pokemon ? <DescriptionCard item={pokemon} includeDescription={true}/> : 'Loading...'}
      </div>
    </div>
  )
}

export default Pokemon

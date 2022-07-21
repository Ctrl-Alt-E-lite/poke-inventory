// Page for specific pokemon

// Show Name, Pokedex #, Image and Type(s) 

// Page for specific pokemon
import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
// Show Name, Pokedex #, Image and Type(s) 

function Pokemon () {

    const [pokemons, setPokemon] = useState([]);
    const params = useParams()
    const getPokemonById = async () => {
        const res = await fetch(`http://localhost:8080/api/pokemon/${params.pokedex}`)
        const data = await res.json()
        console.log(data);
        const {foundPokemon} = data
        setPokemon(foundPokemon);
    }
    useEffect(() => {
        getPokemonById()
    },[])
    return (
        <>
        {pokemons.length > 0 ? pokemons.map((pokemon) => 
            <div className="pokemon-card-container">
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img} alt={pokemon.name} />
            <p>Type: {pokemon.type}</p>
            <p>#{pokemon.num}</p>
        </div>
            ) : 'Pokemon not found'}
            </>
    );
}

export default Pokemon;
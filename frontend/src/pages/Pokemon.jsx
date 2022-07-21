// Page for specific pokemon
import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Show Name, Pokedex #, Image and Type(s) 

function Pokemon () {

    const [pokemon, setPokemon] = useState([]);
    const params = useParams()
    const getPokemonById = async () => {
        const res = await fetch(`http://localhost:8080/api/pokemon/${params.pokedex}`)
        const data = await res.json()
        console.log(params.pokedex);
    }
    useEffect(() => {
        getPokemonById()
    },[])
    return (
        <div className="pokemon-card-container">
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img} alt={pokemon.name} />
            <p>Type: {pokemon.type}</p>
            <p>#{pokemon.pokedex}</p>
        </div>
    );
}

export default Pokemon;
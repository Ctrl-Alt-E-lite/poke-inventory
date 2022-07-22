import { useParams, useLocation } from "react-router";
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

const AddPokemonToTeam = () =>{
    const location = useLocation();
    const {team} = location.state;
    const params = useParams();
    const teamId = params.id;

    const[allPokemon, setAllPokemon] = useState([]);
    const[pokemonImg, setPokemonImg] = useState([]);

    const getAllPokemon = async () => {
        const response = await fetch('http://localhost:8080/api/getAllPokemon')
        const data = await response.json();
        const{getPokemon} = data
        setAllPokemon(getPokemon);
        console.log(getPokemon);
    }
    useEffect(() => {
        getAllPokemon()
    }, [])

    return(
        <>
        <div className="add-pokemon-container">
            <h1>Team Name: {team.teamName}</h1>
            <p>You can add up to 6 pokemon to a team</p>
            <p>Please choose the pokemon you would like to add</p>
            <p>Current Pokemon:</p>
            <div className="pokemon-team">{pokemonImg.map((image) => <img src={image} alt='pokemon' />)}</div>
        </div>
        <div class='pokedex-container'>
        {allPokemon.length > 0 ? allPokemon.map((pokemon) => 
        <div key={pokemon.pokedex} className="browse-pokemon-container">
            <PokemonCard pokemon={pokemon} />
            <button onClick={async () => {
                const response = await fetch(`http://localhost:8080/api/add-pokemon/${pokemon.pokedex}/team/${teamId}`, {
                    method: 'PUT',
                    headers: {'Content-Type' : 'application/json'}
                })
                const data = await response.json();
                console.log(data);
                setPokemonImg(pokemonImg => [...pokemonImg, pokemon.img]);
                console.log(pokemonImg)
            }}
            >Add Pokemon</button>
        </div>
        ): 'No Pokemon in DB'}
        </div>
        </>
    );

}
export default AddPokemonToTeam;
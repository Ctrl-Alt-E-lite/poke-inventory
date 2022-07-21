// Page to view all pokemon in dex order

// On click, go to pokemon page with more infor
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
const Pokedex = () => {
    const[allPokemon, setAllPokemon] = useState([]);

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
        <div>
        <div class='pokedex-container'>
        {allPokemon.length > 0 ? allPokemon.map((pokemon) => 
        <PokemonCard pokemon={pokemon} />): 'No Pokemon in DB'}
        </div>
        </div>
    );
}
export default Pokedex;
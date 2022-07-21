// Page to view all pokemon in dex order

// On click, go to pokemon page with more infor
import { useEffect, useState } from "react";
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
        <>
        {allPokemon.length > 0 ? allPokemon.map((pokemon) => 
        <div key={pokemon.pokedex}>{pokemon.name} 
        <img src={pokemon.img} /> </div>): 'No Pokemon in DB'}
        </>
    );
}
export default Pokedex;
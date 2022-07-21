import { Link } from "react-router-dom";
const PokemonCard = ({pokemon}) => {
    return (
        <Link 
        style={{
            textDecoration: 'none',
            color: 'black'
            }}
        to={`/pokedex/${pokemon.pokedex}`}>
            <div className="pokemon-card-container">
                <img src={pokemon.img} alt={pokemon.name} />
                <h1>{pokemon.name}</h1>
                <p>#{pokemon.num}</p>
            </div>
        </Link>
    );
}
export default PokemonCard;
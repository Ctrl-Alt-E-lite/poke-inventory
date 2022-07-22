import { Link } from "react-router-dom";

const TeamCard = ({team}) => {
    return (
        <Link 
        style={{
            textDecoration: 'none',
            color: 'black'
            }}
        to={`/teams/${team.id}`}>
            <div className="team-card-container">
                <h1>{team.teamName}</h1>
                <p>{team.pokemon}</p>
                <Link to={`/add-pokemon-to-team/${team.id}`} state={{team:team}}>Add Pokemon</Link>
            </div>
        </Link>
    );
}
export default TeamCard;
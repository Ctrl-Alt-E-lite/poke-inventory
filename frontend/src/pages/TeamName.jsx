// Page loads all 6 Pokemon of Team


//Create/Edit functions go here!!

// Randomly Generated Team Logo (Circle with First Letters of Team Name)

// Edit Team function, Exchange or Remove Pokemon
import {useState } from "react";
import {useNavigate } from "react-router";

const TeamName = () => {
    const navigate = useNavigate();
    const [teamName, setTeamName] = useState('');
    const [pokemon, setPokemon] = useState([]);

    const createTeam = async (event) => {
        event.preventDefault();
        const newTeam = {
            teamName,
            pokemon
        }
        const response = await fetch('http://localhost:8080/api/create/team', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newTeam)
        });
        const data = await response.json();
        console.log(data);
        setTeamName('');
        data.success ? navigate('/teams') : navigate('/team-not-added');
    }
    return(
        <div className="form-div">
            <h1>Create a Team</h1>
            <form onSubmit={createTeam}>
                <label> 
                    <input type='text' value={teamName} placeholder="team name" onChange={(event) => setTeamName(event.target.value)}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TeamName;

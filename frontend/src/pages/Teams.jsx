// Page loads list of previously created Teams


import { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";

const Teams = () => {
    const[allTeams, setAllTeams] = useState([]);

    const getAllTeams = async () => {
        const response = await fetch('http://localhost:8080/api/teams')
        const data = await response.json();
        const{allTeams} = data
        setAllTeams(allTeams);
        console.log(allTeams);
        console.log(allTeams);
    }
    useEffect(() => {
        getAllTeams()
    }, [])

    return(
        <div>

        <div class='teams-container'>
        {allTeams.length > 0 ? allTeams.map((team) => 
        <TeamCard team={team} />): 'No Teams in DB'}
        </div>
        </div>
        
    );
}
export default Teams;
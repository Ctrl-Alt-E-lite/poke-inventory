// Page loads list of previously created Teams

import React, {useState, useEffect}  from 'react'; 
import { useParams } from 'react-router-dom';

import BaseCard from '../components/BaseCard'
import Loader from '../components/Loader'

function Team() {

    const {id} = useParams();

    const [ team, setTeam ] = useState();

    const getTeam = async (teamId) => {
        const response = await fetch(`http://localhost:5000/api/teams/${teamId}`);

        const data = await response.json();

        console.log(data.team);

        setTeam(data.team);
    }

    useEffect(() => {
        getTeam(id);
    },[id]);

// View Team button

  return (
    <div className="container">
      <div className='team'>
        <h1>team Details:</h1>
        <div>
          {team ? <BaseCard item={team} includeBase={true}/> : <Loader />}
        </div>
      </div>
    </div>

  )
}

export default Team
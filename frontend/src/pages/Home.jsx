// App home page

// Create Team Button

// View Pokedex Button

// Search Function, Team or Pokemon (toggle) by Name

import React from 'react'

function Home() {
  return (
    <div className='container'>
        <div className='home'>
          <div className='home-instructions'>
          <h3>Create Your Own Pokemon Team!</h3>
            <ul className='instructions'>
              <li>To view all Pokemon go ahead and visit <a href='/pokedex'>Pokedex</a>, from there you can click on any Pokemon and view further information on them</li>
              <li>If you would like to view all the current teams, go ahead and click on <a href='/teams'>Team Gallery</a></li>
              <li>To get started and build your very own Team, click on <a href='/create/team'>Create Team</a>!!!</li>
            </ul>
          </div>
        </div>

    </div>
  )
}

export default Home
// Footer hosts spinning Loader

import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-around;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: tomato;
  }

`

function Footer() {
  return (
    <StyledFooter>
      <div>
        <p>Made with ❤️ by Andrea, Dakotah, & Haley</p>
        <div id='links'>
          <a href='https://github.com/Ctrl-Alt-E-lite/poke-inventory'>github</a>
        </div>
      </div>
    </StyledFooter>
  )
}



// Home Button in Footer


export default Footer
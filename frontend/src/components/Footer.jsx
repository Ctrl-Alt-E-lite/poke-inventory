// Footer hosts spinning Loader

import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5em;
    background-size: contain;
    margin: 0;
    bottom: 0;
    width: 100%;
    height: 5em;
    

`

function Footer() {
  return (
    <StyledFooter>
      <div>
        <p>Made with ❤️ by Andrea, Dakotah, & Haley</p>
        <div id='links'>
          <a href='https://github.com/Ctrl-Alt-E-lite/poke-inventory'>github</a>
          <a href='/'>home</a>
        </div>
      </div>
    </StyledFooter>
  )
}



// Home Button in Footer


export default Footer
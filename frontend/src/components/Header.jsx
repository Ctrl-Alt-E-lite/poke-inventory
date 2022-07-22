// App Title
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import Styled from 'styled-components';

const StyledHeader = Styled.header``

function Header({text, bgColor, textColor}) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }

    const btnStyles = {
        marginBottom: '1rem'
    }

  return (
    <StyledHeader style={headerStyles}>
        <div className='header-container'>
            <Link to="/" style={{textDecoration: 'none'}}>
                <div className='header-text' style={{color: textColor}}>{text}</div>
            </Link>

            <nav className="header-links">
                <ul>
                    <li>
                        <a href='/create/team'><button style={btnStyles}>Create Team</button></a>
                    </li>   <li>
                        <a href='/teams'><button style={btnStyles}>Team Gallery</button></a>
                    </li>
                    <li>
                        <a href='/pokedex'><button style={btnStyles}>Pokedex</button></a>
                    </li>
                </ul>
            </nav>

        </div>
    </StyledHeader>
  )
}

Header.defaultProps = {
    text: 'App',
    textColor: 'cream',
    bgColor: 'black'
}

Header.propTypes = {
    text: Proptypes.string.isRequired,
    textColor: Proptypes.string,
    bgColor: Proptypes.string,
}

export default Header

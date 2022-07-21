// App Title
import Proptypes from 'prop-types';
import LinkButton from './LinkButton';
import { Link } from 'react-router-dom';

function Header({text, bgColor, textColor}) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }

    const btnStyles = {
        marginBottom: '1rem'
    }

  return (
    <header style={headerStyles}>
        <div className='header-container'>
            <Link to="/" style={{textDecoration: 'none'}}>
                <div className='header-text' style={{color: textColor}}>{text}</div>
            </Link>

            <nav className="header-links">
                <ul>
                    <li>
                        <LinkButton style={btnStyles} text={'Create Team'} to={'/create-team'}/>
                    </li>
                    <li>
                        <LinkButton style={btnStyles} text={'Team Gallery'} to={'/teams'}/>
                    </li>
                    <li>
                        <LinkButton style={btnStyles} text={'Pokedex'} to={'/pokedex'}/>
                    </li>
                </ul>
            </nav>

        </div>
    </header>
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
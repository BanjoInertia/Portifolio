import PropTypes from 'prop-types';
import classes from './Header.module.css';

export const Header = ({ scrollTo, aboutSection, projectsSection }) => {
    return (
        <div>
            <ul className={classes.nav_bar}>
                <button onClick={() => scrollTo(aboutSection)}>SOBRE</button>
                <button onClick={() => scrollTo(projectsSection)}>PROJETOS</button>
            </ul>
        </div>
    )
}

Header.propTypes = {
    scrollTo: PropTypes.func.isRequired,
    aboutSection: PropTypes.string.isRequired,
    projectsSection: PropTypes.string.isRequired
};

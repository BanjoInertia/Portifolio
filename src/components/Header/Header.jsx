import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './Header.module.css';

export const Header = ({ scrollTo, aboutSection, projectsSection }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 10000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <ul className={`${classes.nav_bar} ${isVisible ? classes.visible : ''}`}>
                <button onClick={() => scrollTo(aboutSection)}>SOBRE</button>
                <button onClick={() => scrollTo(projectsSection)}>PROJETOS</button>
            </ul>
        </div>
    );
};

Header.propTypes = {
    scrollTo: PropTypes.func.isRequired,
    aboutSection: PropTypes.string.isRequired,
    projectsSection: PropTypes.string.isRequired
};

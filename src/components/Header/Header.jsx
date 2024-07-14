import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './Header.module.css';

export const Header = ({ scrollTo, aboutSection, projectsSection, videoLoaded }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (videoLoaded) {
            const timeout = setTimeout(() => {
                setIsVisible(true);
            }, 10000);
    
            return () => clearTimeout(timeout);
        }
    }, [videoLoaded]);

    return (
        <div>
            <ul className={`${classes.nav_bar} ${isVisible ? classes.visible : ''}`}>
                <li><button onClick={() => scrollTo(aboutSection)}>SOBRE</button></li>
                <li><button onClick={() => scrollTo(projectsSection)}>PROJETOS</button></li>
            </ul>
        </div>
    );
};

Header.propTypes = {
    scrollTo: PropTypes.func.isRequired,
    aboutSection: PropTypes.string.isRequired,
    projectsSection: PropTypes.string.isRequired
};

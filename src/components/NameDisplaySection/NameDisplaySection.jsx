import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import classes from './NameDisplaySection.module.css';

export const NameDisplaySection = ({ videoLoaded }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [changeColor, setChangeColor] = useState(false);

    useEffect(() => {
        if (videoLoaded) {
            const timeout1 = setTimeout(() => {
                setIsVisible(true);
            }, 1000);

            const timeout2 = setTimeout(() => {
                setChangeColor(true);
            }, 10000);

            return () => {
                clearTimeout(timeout1);
                clearTimeout(timeout2);
            };
        }
    }, [videoLoaded]);

    return (
        <div className={classes.container}>
            <div className={`${classes.tittle_container} ${isVisible ? classes.visible : ''} ${changeColor ? classes.changeColor : ''}`}>
                <p className={classes.tittle}>DESENVOLVEDOR FRONT-END</p>
                <h1 className={classes.tittle_name}>MARCELO HENRIQUE</h1>
            </div>
        </div>
    );
};

// PropTypes validation
NameDisplaySection.propTypes = {
    videoLoaded: PropTypes.bool.isRequired,
};

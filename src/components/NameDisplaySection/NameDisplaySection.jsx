import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './NameDisplaySection.module.css';

export const NameDisplaySection = ({ isVisible, videoLoaded }) => {
    const [changeColor, setChangeColor] = useState(false);

    useEffect(() => {
        if (videoLoaded) {
            const timeout1 = setTimeout(() => {
                setChangeColor(true);
            }, 9000); // 9 seconds, after the 10 seconds timeout

            return () => clearTimeout(timeout1);
        }
    }, [videoLoaded]);

    return (
        <div className={classes.container}>
            <div 
                className={`${classes.tittle_container} ${isVisible ? classes.visible : ''} ${changeColor ? classes.changeColor : ''}`}
            >
                <p className={classes.tittle}>DESENVOLVEDOR FRONT-END</p>
                <h1 className={classes.tittle_name}>MARCELO HENRIQUE</h1>
            </div>
        </div>
    );
};

NameDisplaySection.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    videoLoaded: PropTypes.bool.isRequired
};

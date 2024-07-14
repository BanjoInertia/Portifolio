import { useState, useEffect } from 'react';
import classes from './NameDisplaySection.module.css';

export const NameDisplaySection = ({ videoLoaded }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [changeColor, setChangeColor] = useState(false);

    useEffect(() => {
        if (videoLoaded) {
            // Show title container after 1 second
            const timeout1 = setTimeout(() => {
                setIsVisible(true);
            }, 1000);

            // Change color after 10 seconds
            const timeout2 = setTimeout(() => {
                setChangeColor(true);
            }, 10000);

            // Cleanup timeouts
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

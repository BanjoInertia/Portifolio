import { useState, useEffect } from 'react';
import classes from './Section1.module.css';

export const Section1 = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div className={`${classes.tittle_container} ${isVisible ? classes.visible : ''}`}>
                <p className={classes.tittle}>DESENVOLVEDOR FRONT-END</p>
                <h1 className={classes.tittle_name}>MARCELO HENRIQUE</h1>
            </div>
        </>
    );
};

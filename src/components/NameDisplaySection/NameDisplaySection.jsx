import { useState, useEffect } from 'react';
import classes from './NameDisplaySection.module.css';

export const NameDisplaySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [changeColor, setChangeColor] = useState(false);

    useEffect(() => {
        const timeout1 = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        const timeout2 = setTimeout(() => {
            setChangeColor(true);
        }, 11000);

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
    }, []);

    return (
        <div className={classes.container}>
            <div className={`${classes.tittle_container} ${isVisible ? classes.visible : ''} ${changeColor ? classes.changeColor : ''}`}>
                <p className={classes.tittle}>DESENVOLVEDOR FRONT-END</p>
                <h1 className={classes.tittle_name}>MARCELO HENRIQUE</h1>
            </div>
        </div>
    );
};

import classes from './Section3.module.css'
import img from '../../assets/Semtulo.png'

export const Section3 = () => {
    return (
        <>
            <h1 className={classes.projects_tittle}>PROJETOS</h1>
            <div className={classes.projects_container}>
                <div className={classes.projects}><img src={img} className={classes.projects_img} /></div>
                <div className={classes.projects}><img src={img} className={classes.projects_img} /></div>
            </div>
        </>
    )
}
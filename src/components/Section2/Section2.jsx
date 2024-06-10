import classes from './Section2.module.css'
import img from '../../assets/envelope.png'

export const Section2 = () => {
    return (
        <div className={classes.info_container}>
            <h1 className={classes.info_tittle}>SOBRE</h1>
            <p className={classes.info_text}></p>
            <h1 className={classes.info_tittle}>LINGUAGENS</h1>
            <ul className={classes.jofe_container}>
                <li>
                    <img className={classes.img} src={img}/>
                    <p className={classes.text}>abcd 1</p>
                </li>
                <li>
                    <img className={classes.img} src={img}/>
                    <p className={classes.text}>abcd 1</p>
                </li>
                <li>
                    <img className={classes.img} src={img}/>
                    <p className={classes.text} >abcd 1</p>
                </li>
                <li>
                    <img className={classes.img} src={img}/>
                    <p className={classes.text}>abcd 1</p>
                </li>
            </ul>
        </div>
    )
}
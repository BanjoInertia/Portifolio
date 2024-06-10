import classes from './Section3.module.css'
import img1 from '../../assets/Semtulo.png'
import img2 from '../../assets/jofe.png'

export const Section3 = () => {
    return (
        <>
            <h1 className={classes.projects_title}>PROJETOS</h1>
            <div className={classes.projects_container}>
                <div className={classes.projects}>
                    <img src={img1} className={classes.projects_img} />
                    <span className={classes.projects_text}>STORE é um <span className={classes.ecommerce}>e-commerce</span> que vende produtos ficticios.</span>

                </div>
                <a href='https://infomon-two.vercel.app' target='_blank' className={classes.projects}>
                    <img src={img2} className={classes.projects_img} />
                    <span className={classes.projects_text}>Infomon é um site de consulta de pokemons.</span>
                </a>
            </div>
        </>
    );
};
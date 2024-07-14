import classes from './ProjectsSection.module.css'
import StoreImage from '../../assets/StoreImage.png'
import InfomonImage from '../../assets/InfomonImage.png'

export const ProjectsSection = () => {
    return (
        <>
            <h1 className={classes.projects_title}>PROJETOS</h1>
            <div className={classes.projects_container}>
                <a href='https://main--store-inertia.netlify.app' target='_blank' className={classes.projects}>
                    <img src={StoreImage} className={classes.projects_img} />
                    <span className={classes.projects_text}>STORE é um <span className={classes.ecommerce}>e-commerce</span> que vende produtos ficticios.</span>

                </a>
                <a href='https://infomon-two.vercel.app' target='_blank' className={classes.projects}>
                    <img src={InfomonImage} className={classes.projects_img} />
                    <span className={classes.projects_text}>Infomon é um site de consulta de pokémons.</span>
                </a>
            </div>
        </>
    );
};
import classes from './InformationSection.module.css'
import svghtml from '../../assets/html.svg'
import svgcss from '../../assets/css.svg'
import svgjavascript from '../../assets/javascript.svg'
import svgreact from '../../assets/react.svg'

export const InformationSection = () => {
    return (
        <div className={classes.info_container}>
            <h1 className={classes.info_tittle}>SOBRE</h1>
            <p className={classes.info_text}>Meu nome é Marcelo, sou estudante da área de programação frontend, comecei há pouco mais de um ano, e venho sempre procurando melhorar e aprender coisas novas.<br /><br />

            Busco na criação de meus projetos, sempre tentar compilar a maior quantidade de conhecimentos, da forma mais simples possível, para que eu possa demonstrar meus aprendizados, sem que seja necessário dividi-los em vários diferentes projetos.<br /><br />

            Sobre mim, gosto de jogos, principalmente os que envolvem uma história complexa e com personagens interessantes, alguns deles até me fazem refletir sobre a vida, e como ela deve ser seguida.
            </p>
            <h1 className={classes.info_tittle}>HABILIDADES</h1>
            <ul className={classes.abilities_container}>
                <li className={classes.abilities}>
                    <img className={classes.abilities_img} src={svghtml}/>
                    <p className={classes.abilities_text}>HTML 5</p>
                </li>
                <li className={classes.abilities}>
                    <img className={classes.abilities_img} src={svgcss}/>
                    <p className={classes.abilities_text}>CSS 3</p>
                </li>
                <li className={classes.abilities}>
                    <img className={classes.abilities_img} src={svgjavascript}/>
                    <p className={classes.abilities_text}>JavaScript</p>
                </li>
                <li className={classes.abilities}>
                    <img className={classes.abilities_img} src={svgreact}/>
                    <p className={classes.abilities_text}>React</p>
                </li>
            </ul>
        </div>
    )
}
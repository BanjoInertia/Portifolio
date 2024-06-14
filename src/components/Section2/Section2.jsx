import classes from './Section2.module.css'
import svghtml from '../../assets/html.svg'
import svgcss from '../../assets/css.svg'
import svgjavascript from '../../assets/javascript.svg'
import svgreact from '../../assets/react.svg'

export const Section2 = () => {
    return (
        <div className={classes.info_container}>
            <h1 className={classes.info_tittle}>SOBRE</h1>
            <p className={classes.info_text}>Meu nome é Marcelo, sou estudante da área de programação frontend, comecei há pouco mais de um ano, e venho sempre procurando melhorar e aprender coisas novas.<br /><br />

            Busco na criação de meus projetos, sempre tentar compilar a maior quantidade de conhecimentos, da forma mais simples possível, para que eu possa demonstrar meus aprendizados, sem que seja necessário dividi-los em vários diferentes projetos.<br /><br />

            Sobre mim, gosto de jogos, principalmente os que envolvem uma história complexa e com personagens interessantes, alguns deles até me fazem refletir sobre a vida, e como ela deve ser seguida.
            </p>
            <h1 className={classes.info_tittle}>HABILIDADES</h1>
            <ul className={classes.jofe_container}>
                <li className={classes.jofe}>
                    <img className={classes.img} src={svghtml}/>
                    <p className={classes.text}>HTML 5</p>
                </li>
                <li className={classes.jofe}>
                    <img className={classes.img} src={svgcss}/>
                    <p className={classes.text}>CSS 3</p>
                </li>
                <li className={classes.jofe}>
                    <img className={classes.img} src={svgjavascript}/>
                    <p className={classes.text}>JavaScript</p>
                </li>
                <li className={classes.jofe}>
                    <img className={classes.img} src={svgreact}/>
                    <p className={classes.text}>React</p>
                </li>
            </ul>
        </div>
    )
}
import classes from './Section2.module.css'
import img from '../../assets/envelope.png'

export const Section2 = () => {
    return (
        <div className={classes.info_container}>
            <h1 className={classes.info_tittle}>SOBRE</h1>
            <p className={classes.info_text}>Meu nome é Marcelo, sou estudante da área de programação frontend, comecei há pouco mais de um ano, e venho sempre procurando melhorar e aprender coisas novas.<br /><br />

            Busco na criação de meus projetos, sempre tentar compilar a maior quantidade de conhecimentos, da forma mais simples possível, para que eu possa demonstrar meus aprendizados, sem que seja necessário dividi-los em vários diferentes projetos.<br /><br />

            Sobre mim, gosto de jogos, principalmente os que envolvem uma história complexa e com personagens interessantes, alguns deles até me fazem refletir sobre a vida, e como ela deve ser seguida.
            </p>
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
                    <p className={classes.text}>abcd 1</p>
                </li>
                <li>
                    <img className={classes.img} src={img}/>
                    <p className={classes.text}>abcd 1</p>
                </li>
            </ul>
        </div>
    )
}
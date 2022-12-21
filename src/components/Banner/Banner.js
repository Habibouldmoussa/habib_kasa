import Styles from './Banner.module.css'

function Banner({background, text}) {
    return (
        <section className= {Styles.banner}>
            <img src={background} alt={text ? text : ""} className={Styles.banner__image}/>
            <span className={Styles.banner__text}>{text ? text : ""} </span>
        </section>
    )
}
export default Banner
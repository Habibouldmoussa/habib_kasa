import Styles from './Banner.module.css'

function Banner(props) {
    return (
        <section  className={`${Styles.banner} ${ props.background === "bannerHome" ? Styles.bannerHome  : Styles.bannerAbout}`} >
            <div className={Styles.banner__filter}></div>
            <span className={Styles.banner__text}>{props.text}</span>
        </section>
    )
}
export default Banner
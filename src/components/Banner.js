
import Styles from './Banner.module.css'
import styled from 'styled-components'
import imagehome from '../assets/bannerHome.png'

function Banner(props) {
    const imagebanner = props.background === 'bannerHome' ? imagehome : null
    const Styledbanner = styled.section`
    background: url(${imagebanner}) no-repeat center ; 
    `
    return (
        <Styledbanner background={props.background} className={Styles.banner}>
            <div className={Styles.banner__filter}></div>
            <span className={Styles.banner__text}>{props.text}</span>
        </Styledbanner>
    )
}
export default Banner
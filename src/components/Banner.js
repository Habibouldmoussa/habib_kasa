
import Styles from './Banner.module.css'
import styled from 'styled-components'
import imageHome from '../assets/bannerHome.png'
import imageAbout from '../assets/bannerApropos.png'
function Banner(props) {
    const imagebanner = props.background === 'bannerHome' ? imageHome : imageAbout    
    const Styledbanner = styled.section`
    background: url(${imagebanner}) no-repeat center ; 
    border-radius: 30px;
    `
    return (
        <Styledbanner background={props.background} className={Styles.banner}>
            <div className={Styles.banner__filter}></div>
            <span className={Styles.banner__text}>{props.text}</span>
        </Styledbanner>
    )
}
export default Banner
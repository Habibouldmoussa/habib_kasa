//Importation des composants react
import Styles from './Banner.module.css'
import styled from 'styled-components'
import imageHome from '../assets/bannerHome.png'
import imageAbout from '../assets/bannerApropos.png'
//On récupere le type de backround du banner et en integre l'image qui corespend a la page 
const Styledbanner = styled.section`
background: url(${props => props.background === 'bannerHome' ? imageHome : imageAbout}) no-repeat center ; 
border-radius: 30px;
`

function Banner(props) {
    return (
        <Styledbanner background={props.background} className={Styles.banner}>
            <div className={Styles.banner__filter}></div>
            <span className={Styles.banner__text}>{props.text}</span>
        </Styledbanner>
    )
}
export default Banner
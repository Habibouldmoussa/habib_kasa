import logo from '../assets/logoFooter.svg'
import Styles from  './Footer.module.css'
function Footer() {

    return (
        <footer className={Styles.footer}>
           <img src={logo} alt="logo" />      
           <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer
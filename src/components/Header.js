
//Importation des composants react
import logo from "../assets/LOGO.svg"
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
//On integre les balises de navigation de react route 
function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.header__menu}>
                <NavLink to="/" className={styles.header__linkLogo} >
                    <img src={logo} alt="logo" className={styles.header__logo} />
                </NavLink>
                <ul className={styles.header__meunwarpper}>
                    <NavLink to="/"  >
                        {({ isActive }) => (
                            <li className={
                                isActive ? styles.active : undefined
                            }
                            >Accueil</li>
                        )}
                    </NavLink>
                    <NavLink to="About">
                        {({ isActive }) => (
                            <li className={
                                isActive ? styles.active : undefined
                            }
                            >A propos</li>
                        )}
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}
export default Header
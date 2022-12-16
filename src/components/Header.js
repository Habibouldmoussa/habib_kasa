
import   logo from "../assets/LOGO.svg"
import { Link } from 'react-router-dom'
import Banner from './Banner'
function Header() {

    return (
        <header>
        <img src={ logo } alt="logo"/>
        <nav>
            <ul>
            <Link to="/">
            <li>Accueil </li>
            </Link> 
            <Link to="About">
                <li>A propos</li>
            </Link>
           </ul> 
        </nav>
        <Banner />
        </header>
    )
}
export default Header
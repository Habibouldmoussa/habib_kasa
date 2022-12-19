//Importation des composants react
import './Error.module.css';
import Styles from './Error.module.css'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <main className={Styles.error}>
            <h1 className={Styles.error__title}>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className={Styles.error__link}>Retourner sur la page d’accueil</Link>
        </main>
    )
}
export default Error
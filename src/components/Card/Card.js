//Importation des composants react
import Styles from './Card.module.css'
import { Link } from "react-router-dom";
//On récupere l'ID du logement et on redirige vers le bon lien
function Card({id,cover,title}) {
    return (
        <article className={Styles.card}>
            <Link to={`/Logement/${id}`} >
                <img src={cover} className={Styles.card__img} alt={title} />
                <span className={Styles.card__caption}>{title}</span>
            </Link>
        </article>
    )
}
export default Card
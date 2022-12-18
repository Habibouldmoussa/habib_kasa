import Styles from './Card.module.css'
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <article className={Styles.card}>
            <Link to={`/Single/${props.id}`} >
                <img src={props.cover} className={Styles.card__img} alt={props.title}/>
                <span className={Styles.card__caption}>{props.title}</span>
            </Link>
        </article>
    )
}
export default Card
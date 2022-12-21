//Importation des composants react
import Styles from './Collapse.module.css'
import { useState } from "react"
import iconCollapseDown from "../../assets/vectorDown.png"
import iconCollapseup from "../../assets/vectorUp.png"

function Collapse({liste, description, title}) {
    //State de collapse pour enregistrer l'etat du collapse 
    const [isCollapsed, setCollapsed] = useState(false)
    //verifier si le collapse contient des listes 
    const isListe = liste ? liste : false;    
    //On verifier si la description est collapsé sinon on change son etat et l'ouvre
    return isCollapsed ? (
        <div className={Styles.collapse}>
            <h2 className={Styles.collapse__title} onClick={() => setCollapsed(false)}>{title}  <img src={iconCollapseup} alt={title} /></h2>
            <div className={Styles.collapse__description} >{isListe ? description.map((liste, index) => (
                <li key={index}>{liste}</li>
            )) : description}</div>
        </div>

    ) : (
        <div className={Styles.collapse}>
            <h2 className={Styles.collapse__title} onClick={() => setCollapsed(true)}>{title} <img src={iconCollapseDown} alt={title} /> </h2>
        </div>
    )
}
export default Collapse
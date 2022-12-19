import Styles from './Collapse.module.css'
import { useState } from "react"
import iconCollapseDown from "../assets/vectorDown.png"
import iconCollapseup from "../assets/vectorUp.png"

function Collapse(props) {
    const [isCollapsed, setCollapsed] = useState(false)
    const isListe = props.liste ? props.liste : false;
    const description = props.description    
    return isCollapsed ? (
        <div className={Styles.collapse}>
            <h2 className={Styles.collapse__title} onClick={() => setCollapsed(false)}>{props.title}  <img src= {iconCollapseup} alt={props.title} /></h2>           
            <div className={Styles.collapse__description} >{isListe ? description.map((liste, index) => (
                <li key={index}>{liste}</li>
            )) :props.description}</div>
        </div>

    ) : (
        <div className={Styles.collapse}>
            <h2  className={Styles.collapse__title} onClick={() => setCollapsed(true)}>{props.title} <img src= {iconCollapseDown} alt={props.title} /> </h2>                       
        </div>
    )
}
export default Collapse
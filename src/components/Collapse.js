import Styles from './Collapse.module.css'
import { useState } from "react"
import iconCollapseDown from "../assets/vectorDown.png"
import iconCollapseup from "../assets/vectorUp.png"

function Collapse(props) {
    const [isCollapsed, setCollapsed] = useState(false)
    return isCollapsed ? (
        <div className={Styles.collapse}>
            <h2 className={Styles.collapse__title} onClick={() => setCollapsed(false)}>{props.title}  <img src= {iconCollapseup} alt={props.title} /></h2>
           
            <div className={Styles.collapse__description} >{props.description}</div>
        </div>

    ) : (
        <div className={Styles.collapse}>
            <h2  className={Styles.collapse__title} onClick={() => setCollapsed(true)}>{props.title} <img src= {iconCollapseDown} alt={props.title} /> </h2>      
                 
        </div>
    )
}
export default Collapse
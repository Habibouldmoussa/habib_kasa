//Importation des composants react
import Styles from './Carrousel.module.css'
import { useState } from 'react';
import leftArrow from "../../assets/vectorLeft.png"
import rightArrow from "../../assets/vectorRight.png"

function Carousel({pic}) {
    //On crée un state pour stocker l'image courente 
    const [current, setCurrent] = useState(0) 
    //On calcule le nombre d'images 
    const length = pic.length;
    //On créer les deux fonction pour naviguer dans le carrousel  
    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1) 
    //On verifie si le nombre d'images dépassent une si oui on affiche les bouton de navigation et le compteur
    return (
        length <= 1 ? (
            <section className={Styles.carrousel}>
                <img src={pic[current]} alt='test' className={Styles.carrousel__image} />
            </section>
        ) : (
            <section className={Styles.carrousel}>
                <img src={leftArrow} alt='précedente' onClick={() => prevSlide()} className={Styles.leftArrow} />
                <img src={pic[current]} alt='test' className={Styles.carrousel__image} />
                <p className={Styles.currentCount}>{current + 1}/{length}</p>
                <img src={rightArrow} alt='suivente' onClick={() => nextSlide()} className={Styles.rightArrow} />
            </section>
        )
    )
}
export default Carousel
import Styles from './Carrousel.module.css'
import { useState } from 'react';
import leftArrow from "../assets/vectorLeft.png"
import rightArrow from "../assets/vectorRight.png"
function Carousel(props) {
    const [current, setCurrent] = useState(0)
    const picture = props.pic;
    const length = picture.length;
    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)

    return (
        length <= 1 ? (
            <section className={Styles.carrousel}>
                <img src={picture[current]} alt='test' className={Styles.carrousel__image} />
            </section>
        ) : (
            <section className={Styles.carrousel}>
                <img src={leftArrow} alt='précedente' onClick={() => prevSlide()} className={Styles.leftArrow} />
                <img src={picture[current]} alt='test' className={Styles.carrousel__image} />
                <p className={Styles.currentCount}>{current+1}/{length}</p>
                <img src={rightArrow} alt='suivente' onClick={() => nextSlide()} className={Styles.rightArrow} />
            </section>
        )

    )

}
export default Carousel
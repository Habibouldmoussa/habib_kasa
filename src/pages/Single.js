//Importation des composants react
import Styles from './Single.module.css';
import json from '../datas/logements.json'
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/Carrosel';
import Tag from '../components/Tag.js'
import Collapse from '../components/Collapse';
import starColor from '../assets/starColor.png';
import starWhite from '../assets/starWhite.png';

function Single() {
    //Récuperation de l'id de l'URL 
    const { id } = useParams()
    //Récuperation du logement par son id
    const logment = json.find(log => log.id === id)
    const rating = logment ? logment.rating : 0
    const starts = []
    //boucle de rating du logement 
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) { starts[i] = true } else { starts[i] = false }
    }
    // On verifie si le logement existe sinon on redirige l'utilisateur vers la page d'erreur
    return (
        logment !== undefined ? (
            <main className={Styles.single}>
                <Carousel pic={logment.pictures} title={logment.title} />
                <div className={Styles.single__detail} >
                    <div className={Styles.single__detail__location} >
                        <h1>{logment.title}</h1>
                        <p>{logment.location}</p>
                        <Tag tags={logment.tags} />
                    </div>
                    <div className={Styles.single__detail__profil} >
                        <div className={Styles.single__detail__namePic} >
                            <p>{logment.host.name}</p>
                            <div className={Styles.single__detail__profil__wrapperImg}>
                                <img src={logment.host.picture} alt={logment.host.name} />
                            </div>
                        </div>
                        <div className={Styles.single__detail__profil__start} > {starts.map((start, index) => (
                            <img key={index} src={start ? starColor : starWhite} alt={start ? 'star Color' : 'star White'} />
                        ))}
                        </div>
                    </div>
                </div>
                <div className={Styles.single__collapse}>
                    <div> <Collapse title='Description' description={logment.description} /></div>
                    <div> <Collapse title='Équipements' description={logment.equipments} liste='true' /></div>
                </div>
            </main>
        ) : (
            <Navigate replace to="/*" />
        ))
}
export default Single 
//Importation des composants react
import Styles from './Logement.module.css';
import { useFinditem } from '../../utils/Hooks/Hooks';
import '../../utils/style/loader.css';
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../../components/Carrousel/Carrousel';
import Tag from '../../components/Tag/Tag.js';
import Collapse from '../../components/Collapse/Collapse';
import starColor from '../../assets/starColor.png';
import starWhite from '../../assets/starWhite.png';
import { useTitleChange }from '../../utils/Hooks/Hooks'
function Logement() {
  useTitleChange()
  //Récuperation de l'id de l'URL 
  const { id } = useParams()

  //Récuperation du logement par son id
  let { isLoadingLog, dataLog, errorLog } = useFinditem('../logements.json', id)
  if (errorLog) {
    return <span>Oups il y a eu un problème</span>
  }
  let starts = []
  let rating = 0
  //On verifie si la location est totalment chargé avant de traiter les données 
  if (!isLoadingLog) {
    rating = dataLog ? dataLog.rating : 0
    // boucle de rating du logement 
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) { starts[i] = true } else { starts[i] = false }
    }   
  }
  /* On verifie si le logement existe sinon on redirige l'utilisateur vers la page d'erreur
  *et on affiche le loader en attendant les données  
  */
  return (
    isLoadingLog ? (
      <div className='loader'></div>
    ) : (
      dataLog ? (
        <main className={Styles.single}>
          <Carousel pic={dataLog.pictures} title={dataLog.title} />
          <div className={Styles.single__detail} >
            <div className={Styles.single__detail__location} >
              <h1>{dataLog.title}</h1>
              <p>{dataLog.location}</p>
              <Tag tags={dataLog.tags} />
            </div>
            <div className={Styles.single__detail__profil} >
              <div className={Styles.single__detail__namePic} >
                <p>{dataLog.host.name}</p>
                <div className={Styles.single__detail__profil__wrapperImg}>
                  <img src={dataLog.host.picture} alt={dataLog.host.name} />
                </div>
              </div>
              <div className={Styles.single__detail__profil__start} > {starts.map((start, index) => (
                <img key={index} src={start ? starColor : starWhite} alt={start ? 'star Color' : 'star White'} />
              ))}
              </div>
            </div>
          </div>
          <div className={Styles.single__collapse}>
            <div> <Collapse title='Description' description={dataLog.description} /></div>
            <div> <Collapse title='Équipements' description={dataLog.equipments} liste='true' /></div>
          </div>
        </main>
      ) : (
        <Navigate replace to="/404" />
      )))
}
export default Logement 
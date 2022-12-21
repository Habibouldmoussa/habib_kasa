//Importation des composants react
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
import '../../utils/style/loader.css'
import Styles from './Home.module.css'
import bannerHome from '../../assets/bannerHome.png'
import { useFetch } from '../../utils/Hooks/Hooks'

//Integration du banner et les cards des logomeents 
function Home() {
    const { isLoading, data, error } = useFetch('./logements.json');
    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <div>
            <main className={Styles.main}>
                <Banner background={bannerHome} text='Chez vous, partout et ailleurs' />
                <section className={Styles.main__wrappercard}>
                    {isLoading ? (                        
                            <div className='loader'></div>                        
                    ) : (
                        data.map((element) => (
                                <Card key={element.id} id={element.id} title={element.title} cover={element.cover} />
                            ))
                        
                    )}        
                </section>
            </main>
        </div>
    )
}
export default Home 
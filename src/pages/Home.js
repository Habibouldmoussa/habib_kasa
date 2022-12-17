import './Home.module.css';
import Card from '../components/Card'
import json from '../datas/logements.json'
import Banner from '../components/Banner'
import Styles from './Home.module.css'
import Footer from '../components/Footer';
function Home() {

    return (
        <div> 
        <main className={Styles.main}>
          <Banner background='bannerHome' text='Chez vous, partout et ailleurs'/>
            <section className={Styles.main__wrappercard}>
                {json.map((element) => (
                    <Card key={element.id} id={element.id} title={element.title} cover={element.cover} />
                ))}
            </section>
        </main>
        <Footer />
     </div>
    )
}
export default Home 
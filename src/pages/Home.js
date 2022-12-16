import './Home.module.css';
import Card from '../components/Card'
import json from '../datas/logements.json'

function Home() {
 
    return (
        <section>
            {json.map((element) =>  ( 
                <Card key={element.id} id={element.id} name={element.title} cover={element.cover} />
            ) )}
            
        </section>
    )
}
export default Home 
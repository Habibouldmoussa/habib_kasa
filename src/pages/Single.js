import './Single.module.css';
import json from '../datas/logements.json'
import { useParams } from 'react-router-dom';

function Single() {
    const { id } = useParams()
    const logment = json.find(log => log.id === id)
    return (
        <h1>{logment.id}</h1>
    )
}
export default Single 
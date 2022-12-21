//Importation des dépendances react
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Importation des pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Logement from './pages/Logement/Logement';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Routing
function Routing() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} /> { /*Route vers la page d'accueil*/ }
                <Route path='/about' element={<About />} />{ /*Route vers la page apropos */ }
                <Route path='/Logement/:id' element={<Logement />} /> { /*Route vers les pages singles*/ }
                <Route path='/Logement/*' element={<Error />} />{ /*Route vers la page d'erreur*/ }
                <Route path='*' element={<Error />} /> { /*Route vers la page d'erreur*/ }
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default Routing;


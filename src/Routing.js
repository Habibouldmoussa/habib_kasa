//Importation des dépendances react
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Importation des pages
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Single from './pages/Single';
import Header from './components/Header';
import Footer from './components/Footer';
//Routing
function Routing() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} /> { /*Route vers la page d'accueil*/ }
                <Route path='/about' element={<About />} />{ /*Route vers la page apropos */ }
                <Route path='/Single/:id' element={<Single />} /> { /*Route vers les pages singles*/ }
                <Route path='/Single/*' element={<Error />} />{ /*Route vers la page d'erreur*/ }
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default Routing;


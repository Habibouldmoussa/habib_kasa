import {Routes, Route} from 'react-router-dom'; //importation des routes react
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

function  Routing() {
     return (  
        <div>
            <Header />
                <Routes>
                    <Route path='/' element={<Home />} />              
                    <Route path='/about' element={<About />} />              
                </Routes>
        <Footer />
    </div>

         ) 
 }
export default Routing

{/* <Route path='/RentalAds/:id' element={<RentalAds />} />
<Route path='/about' element={<About />} />
<Route path='*' element={<Error />} /> */}
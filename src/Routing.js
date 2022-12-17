import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Single from './pages/Single';
import Header from './components/Header';


function  Routing() {
     return (  
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path='/' element={<Home />} />              
                    <Route path='/about' element={<About />} />  
                    <Route path='/Single' element={<Single />} />  
                    <Route path='*' element={<Error />} />  
                </Routes>
         </BrowserRouter>
         ) 
 }
export default Routing;


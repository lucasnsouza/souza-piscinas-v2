import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import WhatsappButton from './components/WhatsappButton';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Services from './pages/Services';

export default function AppRouter() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/'>
                <Route index element={<Home/>}/>
                <Route path='/servicos' element={<Services/>}/>
                <Route path='/sobre' element={<AboutUs/>}/>
                </Route>
            </Routes>
            <WhatsappButton />
            <Footer/>
        </Router>
    )
}
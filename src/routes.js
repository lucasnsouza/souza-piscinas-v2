import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';

export default function AppRouter() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/souza-piscinas-v2'>
                <Route index element={<Home/>}/>
                <Route path='/souza-piscinas-v2/servicos' element={<Services/>}/>
                </Route>
            </Routes>
            <Footer/>
        </Router>
    )
}
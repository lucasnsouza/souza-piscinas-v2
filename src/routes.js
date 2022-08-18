import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

export default function AppRouter() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/souza-piscinas-v2' element={<Home/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}
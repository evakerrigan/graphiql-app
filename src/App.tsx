import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';

function App() {



    return (
        <div className="app">

            <Header />
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Welcome />} /> */}
                    <Route path="/main" element={<Main />} />
                    <Route path="/login" element={<Login />} />


                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App

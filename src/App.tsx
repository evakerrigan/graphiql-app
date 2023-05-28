import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { useReg } from './hooks/useReg';
import NotFound from './pages/NotFound/NotFound';
import Welcome from './pages/Welcome/Welcome';
import { RoutePermission } from './utility/routePermission';
import { useEffect, useState } from 'react';
import i18next from 'i18next';

function App() {
    const [lang, setLang] = useState(true);

    useEffect(() => {
        // const switcher = (bool: boolean) => {
        //     setLang(bool);
            lang ? i18next.changeLanguage('ru') : i18next.changeLanguage('en');
            console.log('lang in useEffect', lang);
        //   };
    }, [lang])


    const isReg = useReg();

    return (
        <div className="app">

            <Header setLang={setLang} lang={lang} />
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Welcome />} />

                    <Route path="/login" element={
                        <RoutePermission>
                            <Login />
                        </RoutePermission>} />

                    <Route path="/register" element={
                        <RoutePermission>
                            <Register />
                        </RoutePermission>} />
                    {isReg.user ?
                        <Route path="/main" element={<Main />} /> : <Route path="/main" element={<Navigate to="/" replace />} />
                    }

                    <Route path="/notfound" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/notfound" replace />} />

                </Routes>

            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App

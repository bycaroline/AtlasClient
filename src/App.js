import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StartPage from './pages/StartPage';
import ProfilePage from './pages/ProfilePage';
import { isAuthenticated } from './services/AuthService';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(isAuthenticated());
    }, []);

    let routes;

    if (isAuth) {
        routes = (
            <Fragment>
                <Route path="/" element={<HomePage />} />
                <Route path="/startsida" element={<StartPage />} />
                <Route path="/min-profil" element={<ProfilePage />} />
                <Route path="/*" element={<Navigate to="/startsida" />} />
            </Fragment>
        );
    } else {
        routes = (
            <Fragment>
                <Route path="/" element={<HomePage />} />
                <Route path="/*" element={<HomePage />} />
            </Fragment>
        );
    }

    return (
        <Router>
            <Routes>
                {routes}
            </Routes>
        </Router>
    );
}

export default App;

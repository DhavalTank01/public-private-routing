import React from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import { URLS } from './routing/urls';
import Registration from './Pages/Registration';
import NoMatch from './Pages/NoMatch';
import { useAuth } from './hooks/useAuth';

const App = () => {

    const PrivateRouter = ({ children }) => {
        const isAuthenticated = useAuth();
        return isAuthenticated ? children : <Navigate to={URLS.Login} />
    };

    const PublicRouter = ({ children }) => {
        const isAuthenticated = useAuth();
        console.log('isAuthenticated :>> ', isAuthenticated);
        return !isAuthenticated ? children : <Navigate to={URLS.Dashboard} />
    };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={
                        <PrivateRouter>
                            <Dashboard />
                        </PrivateRouter>
                    } />
                    <Route path={URLS.Dashboard} element={
                        <PrivateRouter>
                            <Dashboard />
                        </PrivateRouter>
                    } />
                    <Route path={URLS.Login} element={
                        <PublicRouter>
                            <Login />
                        </PublicRouter>
                    } />
                    <Route path={URLS.Register} element={
                        <PublicRouter>
                            <Registration />
                        </PublicRouter>
                    } />
                    <Route path={"*"} element={<NoMatch />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
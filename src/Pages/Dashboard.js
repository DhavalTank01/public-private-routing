import React from 'react'
import { useNavigate } from 'react-router-dom';
import { URLS } from '../routing/urls';

const Dashboard = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate(URLS.Login);
    };

    return (
        <div>
            <h1>
                Dashboard
            </h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard
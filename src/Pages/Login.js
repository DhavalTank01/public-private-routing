import React from 'react'
import { URLS } from '../routing/urls'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    let login = () => {
        localStorage.setItem("token", JSON.stringify("test.test.test"))
        localStorage.setItem("user", JSON.stringify({ id: 1, username: "admin", role: "admin" }))
        navigate(URLS.Dashboard);
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={login}>Login</button>
            <br />
            <Link to={URLS.Register}>Create Account?</Link>
        </div>
    )
}

export default Login
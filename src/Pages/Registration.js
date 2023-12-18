import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { URLS } from '../routing/urls'

const Registration = () => {
    const navigate = useNavigate();
    let register = () => {
        localStorage.setItem("token", JSON.stringify("test.test.test"))
        localStorage.setItem("user", JSON.stringify({ id: 1, username: "admin", role: "admin" }))
        navigate(URLS.Dashboard);
    }

    return (
        <div>
            <h1>Registration</h1>
            <button onClick={register}>Register</button>
            <br />
            <Link to={URLS.Login}>Login?</Link>
        </div>
    )
}

export default Registration
import axios from "axios";
import React from "react";
import './login.css'
import { useContext } from "react";
import { useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })

    const { user, loading, error, dispatch } = useContext(AuthContext)

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const navigate=useNavigate()
    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("/auth/login", credentials)
            navigate('/')
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
        }
        console.log(user)
    }
    return (
        <div className="login">
            <div className="lContainer">
                <input className="lInput" placeholder="username" type="text" id="username" onChange={handleChange}></input>
                <input className="lInput" placeholder="password" type="password" id="password" onChange={handleChange}></input>
                <button disabled={loading} className="lButton" onClick={handleClick}>Login</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}
export default Login
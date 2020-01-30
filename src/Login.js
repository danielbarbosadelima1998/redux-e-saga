import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionsUser } from './store/ducs/user'

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(actionsUser.loginUserInit( username, password))

    }
    return (
        <div>
            Username: <input type='text' onChange={(e) => setUsername(e.target.value)} />
            Password: <input type='text' onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Enviar</button>
        </div>
    )
}

export default Login;
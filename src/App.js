import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionsUser } from "./store/ducs/user";
const App = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [key, setKey] = useState()
    const [usernameUpdateValue, setUsernameUpdateValue] = useState('')
    const [passwordUpdateValue, setPasswordUpdateValue] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionsUser.findAllUserInit())
    }, [])

    const state = useSelector(state => state)

    const handleEdit = (id, username, password) => {
        dispatch(actionsUser.updateUserInit(id, username, password))
    }
    return (
        <>
            Username: <input type='text' onChange={(e) => setUsername(e.target.value)} />
            Password: <input type='text' onChange={(e) => setPassword(e.target.value)} />

            <button onClick={() => dispatch(actionsUser.addUserInit(username, password))}>Enviar</button>
            <ul>
                {
                    state.user.data.map(({ id, username, password }) => {
                        return (
                            <div key={id}>
                                <li >{`${id}`}</li>
                                <li>{`Username: ${username}`}</li>
                                <li> {`Password: ${password} `}</li>

                                <button onClick={() => dispatch(actionsUser.deleteUserInit(id))}>Deletar</button>

                                <button onClick={() => {
                                    id === key ? setKey(null) : setKey(id)
                                }}>{key === id ? 'Esconder' : 'Editar'}</button>

                                <div style={{ display: key === id ? 'flex' : 'none', flexDirection: 'column', width: '300px' }}>
                                    Username: <input type='text' onChange={(e) => setUsernameUpdateValue(e.target.value)} />
                                    <br />
                                    Password: <input type='text' onChange={(e) => setPasswordUpdateValue(e.target.value)} />
                                    <br />
                                    <button onClick={() => handleEdit(id, usernameUpdateValue, passwordUpdateValue)}>Editar</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default App;
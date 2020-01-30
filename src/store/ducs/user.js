const initialStates = {
    data: [],
    user: {
        id: '1', username: 'daniel', password: '123456'
    },
    login: {
        token: '',
        user: {}
    },
    loading: false,
    error: false,
    status: 'not initialized',
}

export const typesUser = {
    addUserInit: 'addUserInit',
    addUserSuccess: 'addUserSuccess',
    addUserError: 'addUserError',

    deleteUserInit: 'deleteUserInit',
    deleteUserSuccess: 'deleteUserSuccess',
    deleteUserError: 'deleteUserError',

    updateUserInit: 'updateUserInit',
    updateUserSuccess: 'updateUserSuccess',
    updateUserError: 'updateUserError',

    findUserInit: 'findUserInit',
    findUserSuccess: 'findUserSuccess',
    findUserError: 'findUserError',

    removeUserInit: 'removeUserInit',
    removeUserSuccess: 'removeUserSuccess',
    removeUserError: 'removeUserError',

    findAllUserInit: 'findAllUserInit',
    findAllUserSuccess: 'findAllUserSuccess',
    findAllUserError: 'findAllUserError',

    loginUserInit: 'loginUserInit',
    loginUserSuccess: 'loginUserSuccess',
    loginUserError: 'loginUserError,'
}

export const actionsUser = {
    addUserInit: (username, password) => {
        return {
            type: typesUser.addUserInit,
            payload: {
                username,
                password,
            }
        }
    },
    addUserSuccess: (id, username, password) => {
        return {
            type: typesUser.addUserSuccess,
            payload: {
                id,
                username,
                password
            },
        }
    },
    addUserError: () => {
        return {
            type: typesUser.addUserError,
        }
    },
    deleteUserInit: (id) => {
        return {
            type: typesUser.deleteUserInit,
            payload: { id },
        }
    },
    deleteUserSuccess: (id) => {
        return {
            type: typesUser.deleteUserSuccess,
            payload: {
                id,
            }
        }
    },
    deleteUserError: () => {
        return {
            type: typesUser.deleteUserError,
        }
    },
    updateUserInit: (id, username, password) => {
        return {
            type: typesUser.updateUserInit,
            payload: {
                id,
                username,
                password,
            }
        }
    },
    updateUserSuccess: (id, username, password) => {
        return {
            type: typesUser.updateUserSuccess,
            payload: {
                id,
                username,
                password,
            }
        }
    },
    updateUserError: () => {
        return {
            type: typesUser.addUserError,
        }
    },
    findUserInit: (id) => {
        return {
            type: typesUser.addUserInit,
            payload: {
                id,
            }
        }
    },
    findUserSuccess: (id) => {
        return {
            type: typesUser.findUserSuccess,
            payload: {
                id,
            }
        }
    },
    findUserError: () => {
        return {
            type: typesUser.findUserError,
        }
    },
    removeUserInit: (id) => {
        return {
            type: typesUser.removeUserInit,
            payload: {
                id,
            }
        }
    },
    removeUserSuccess: (id) => {
        return {
            type: typesUser.removeUserSuccess,
            payload: {
                id,
            }
        }
    },
    removeUserError: () => {
        return {
            type: typesUser.removeUserError,
        }
    },
    findAllUserInit: () => {
        return {
            type: typesUser.findAllUserInit,
        }
    },
    findAllUserSuccess: (data) => {
        return {
            type: typesUser.findAllUserSuccess,
            payload: {
                data
            },
        }
    },
    findAllUserError: () => {
        return {
            type: typesUser.findAllUserError,
        }
    },
    loginUserInit: (username, password) => {
        return {
            type: typesUser.loginUserInit,
            payload: {
                username,
                password
            }
        }
    },
    loginUserSuccess: (token, user) => {
        return {
            type: typesUser.loginUserInit,
            payload: {
                login: {
                    token,
                    user
                }
            },
        }
    },
    loginUserError: () => {
        return {
            type: typesUser.loginUserError,
        }
    },

}

export const reducersUser = (state = initialStates, action) => {
    switch (action.type) {
        // ADD USER
        case typesUser.addUserInit:
            return {
                ...state,
                status: typesUser.addUserInit,
            }
        case typesUser.addUserSuccess:
            return {
                ...state,
                data:
                    [
                        ...state.data,
                        {
                            id: action.payload.id,
                            username: action.payload.username,
                            password: action.payload.password,
                        }
                    ],
                status: typesUser.addUserSuccess,
            }
        case typesUser.addUserError:
            return {
                ...state,
                status: typesUser.addUserError,
            }

        // DELETE USER
        case typesUser.deleteUserInit:
            return {
                ...state,
                status: typesUser.deleteUserInit,
            }

        case typesUser.deleteUserSuccess:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.payload.id),
                status: typesUser.deleteUserSuccess,
            }

        case typesUser.deleteUserError:
            return {
                ...state,
                status: typesUser.deleteUserError,
            }

        //UPDATE USER
        case typesUser.updateUserInit:
            return {
                ...state,
                status: typesUser.updateUserInit,
            }

        case typesUser.updateUserSuccess:
            return {
                ...state,
                data: state.data.map(item =>
                    item.id === action.payload.id ?
                        {
                            id: action.payload.id,
                            username: action.payload.username,
                            password: action.payload.password,
                        } : item
                ),
                status: typesUser.updateUserSuccess,
            }

        case typesUser.updateUserError:
            return {
                ...state,
                status: typesUser.updateUserError,
            }

        // FIND USER
        case typesUser.findUserInit:
            return {
                ...state,
                status: typesUser.findUserInit,
            }

        case typesUser.findUserSuccess:
            return {
                ...state,
                user: state.data.find(item => item.id === action.payload.id),
                status: typesUser.findUserSuccess,
            }

        case typesUser.findUserError:
            return {
                ...state,
                status: typesUser.findUserError,
            }

        // REMOVE USER

        case typesUser.removeUserInit:
            return {
                ...state,
                status: typesUser.removeUserInit,
            }

        case typesUser.removeUserSuccess:
            return {
                ...state,
                user: '',
                status: typesUser.removeUserSuccess,
            }

        case typesUser.removeUserError:
            return {
                ...state,
                status: typesUser.removeUserError,
            }
        default:
            return state

        // SHOW USERS

        case typesUser.findAllUserInit:
            return {
                ...state,
                status: typesUser.findAllUserInit,
            }
        case typesUser.findAllUserSuccess:
            return {
                ...state,
                data: action.payload.data,
                status: typesUser.findAllUserSuccess,
            }
        case typesUser.findAllUserError:
            return {
                ...state,
                satus: typesUser.findAllUserError,
            }

        // LOGIN USER

        case typesUser.loginUserInit:
            return {
                ...state,
                status: typesUser.loginUserInit,
            }
        case typesUser.loginUserSuccess:
            return {
                ...state,
                login: {
                    token: action.payload.login.token,
                    user: action.payload.login.user,
                },
                status: typesUser.loginUserSuccess,
            }
        case typesUser.loginUserError:
            return {
                ...state,
                satus: typesUser.loginUserError,
            }
    }
}
import { put, takeLatest, call, select } from "redux-saga/effects";
import { typesUser } from "../ducs/user";
import { index, store, show, destroy, update, login } from "../../service/api"

function* addUser(action) {
    try {
        const response = yield call(store, '/users', {
            username: action.payload.username,
            password: action.payload.password,
        })
        yield put({
            type: typesUser.addUserSuccess,
            payload: {
                id: response.id,
                username: action.payload.username,
                password: action.payload.password,
            }
        })
    } catch (error) {
        yield put({
            type: typesUser.addUserError,
        })
    }

}

function* deleteUser(action) {
    const token = yield select(state => state.user.token)
    try {
        console.log('@@@@', action)
        yield call(destroy, '/users', action.payload.id, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        yield put({
            type: typesUser.deleteUserSuccess,
            payload: {
                id: action.payload.id,
            }
        })
    } catch (error) {
        yield put({
            type: typesUser.deleteUserError,
        })
    }
}

function* updateUser(action) {
    try {
        yield call(update, '/users', action.payload)
        yield put({
            type: typesUser.updateUserSuccess,
            payload: {
                id: action.payload.id,
                username: action.payload.username,
                password: action.payload.password,
            }
        })
    } catch (error) {
        yield put({
            type: typesUser.updateUserError,
        })
    }
}

function* findAllUser() {
    const token = yield select(state => state.login.token)
    if (token) {
        try {
            const response = yield call(index, '/users')
            yield put({
                type: typesUser.findAllUserSuccess,
                payload: {
                    data: response
                }
            })
        } catch (error) {
            yield put({
                type: typesUser.findAllUserError,
            })
        }
    }
}

function* loginUser(action) {
    try {
        const response = yield call(login, {
            username: action.payload.username,
            password: action.payload.password,
        })
        yield put({
            type: typesUser.loginUserSuccess,
            payload: {
                login: {
                    token: response.token,
                    user: response.data,
                }
            }
        })
    } catch (error) {
        yield put({
            type: typesUser.loginUserError,
        })
    }
}

function* watcherUser() {
    yield takeLatest(typesUser.addUserInit, addUser)
    yield takeLatest(typesUser.deleteUserInit, deleteUser)
    yield takeLatest(typesUser.updateUserInit, updateUser)
    yield takeLatest(typesUser.findAllUserInit, findAllUser)
    yield takeLatest(typesUser.loginUserInit, loginUser)

}

export default watcherUser;
import Axios from "axios";

const axios = Axios.create({
    baseURL: 'http://localhost:3333',
})

export const index = async (path, options = {}) => {
    try {
        const response = await axios.get(
            path,
            options,
        )
        return response.data;
    } catch (error) {
        return error;
    }
}

export const show = async (path, id, options = {}) => {
    try {
        const response = await axios.get(
            `${path}/${id}`,
            options,
        )
        return response.data;
    } catch (error) {
        return error;
    }
}

export const store = async (path, data, options = {}) => {
    try {
        const response = await axios.post(
            path,
            data,
            options
        )
        return response.data;
    } catch (error) {
        return error;
    }
}

export const destroy = async (path, id, options = {}) => {
    try {
        const response = await axios.delete(
            `${path}/${id}`,
            options
        )
        return response.data;
    } catch (error) {
        return error;
    }
}

export const update = async (path, data, options = {}) => {
    try {
        const response = await axios.put(
            `${path}/${data.id}`,
            data,
            options,
        )
        return response.data;
    } catch (error) {
        return error;
    }
}

export const login = async (data, options = {}) => {
    try {
        const response = await axios.post(
            '/auth',
            data,
            options,
        )
        return response.data;
    } catch (error) {
        return error;
    }
}
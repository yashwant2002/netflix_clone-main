import axios from 'axios';
import { URL } from '../utils/constants';

axios.defaults.withCredentials = false;


// api to signup user 
export const signupUser = async (data) => {
    try {
        return await axios.post(`${URL}/auth/signup`, data)
    } catch (error) {
        console.log(error, "error while calling signupUser api")
    }
}


// api to login user 
export const loginUser = async (data) => {
    try {
        return await axios.post(`${URL}/auth/login`, data)
    } catch (error) {
        console.log(error, 'error while calling login user api')
    }
}


// api to verifyUser 
export const verifyUser = async () => {
    try {
        return await axios.get(`${URL}/auth/verify`)
    } catch (error) {
        console.log(error, 'error while calling verifyUser api')
    }
}


// api to add like movies 
export const addToLikedMovies = async ({ email, data }) => {
    try {
        return await axios.post(`${URL}/auth/add`, { email, data })
    } catch (error) {
        console.log(error, "error while calling addToList api");
    }
}
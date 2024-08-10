import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

axios.defaults.withCredentials = true

const register = async (data : { username: string, email: string, password: string}) => {
    const response = await axios.post(API_URL + "register", data);

    if (response.data && response.data.user !== null) {
        localStorage.setItem('user', JSON.stringify(response.data.user))
    }

    return response.data;
};

const login = async (data : { email: string, password: string}) => {
    const response = await axios.post(API_URL + "login", data);

    if (response.data && response.data.user !== null) {
        localStorage.setItem('user', JSON.stringify(response.data.user))
    }

    return response.data;
};

const checkAuth = async () => {
    const response = await axios.get(API_URL + "check-auth");

    if (response.data && response.data.user !== null) {
        localStorage.setItem('user', JSON.stringify(response.data.user))
    }

    return response.data;
};

const authActions = {
    register,
    checkAuth,
    login
};

export default authActions;
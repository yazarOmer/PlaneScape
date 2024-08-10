import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

const register = async (data : { username: string, email: string, password: string}) => {
    const response = await axios.post(API_URL + "register", data);

    if (response.data && response.data.user !== null) {
        localStorage.setItem('user', JSON.stringify(response.data.user))
    }

    return response.data;
};

const authActions = {
    register,
};

export default authActions;
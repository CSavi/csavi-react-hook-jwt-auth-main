import axios from "axios";

/* Authentication Service: uses Axios for HTTP requests and Local Storae for user info & JWT;

Provides functions:
1. login(): POST {user, password}; saves JWT to Local Storage;
2. logout(): removes JWT from Local Storage;
3. register(): POST {user, password, email};
4. getCurrentUser(): get stored user info (including JWT); 
*/

const API_URL = "http://localhost:8080/api/auth/";

const register = (user, password, email) => {
    return axios.post(API_URL + 'signup', {
        user,
        password,
        email,
    })
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
};


const login = (user, password) => {
    return axios.post(API_URL + 'login', {
        user,
        password,
    })
    .then((resp) => {
        if (resp.data.accessToken) {
            // set inside local storage
        }
        return resp.data;
    })
    .catch((err) => console.error(`Failed to login due to ${err}. Please retry or contact Tech Support.`))
};

const logout = () => {
    // remove user from local storage
};

const getCurrentUser = () => {
    // get user from local storage 
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
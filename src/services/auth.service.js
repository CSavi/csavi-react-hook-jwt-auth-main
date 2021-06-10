import axios from "axios";
/* Who needs this data — the client (JS) or the server?
-- If client, then by all means switch. 
You're wasting bandwidth by sending all the data in each HTTP header.

-- If server, local storage isn't so useful because 
you'd have to forward the data along somehow (with Ajax or hidden form fields or something). 
This might be okay if the server only needs a small subset of the total data for each request.

/* Authentication Service: uses Axios for HTTP requests and Local Storage for user info & JWT;

LS: an implementation of the Storage Interface. 
It stores data with no expiration date, and 
gets cleared only through JavaScript, or 
clearing the Browser Cache / Locally Stored Data — unlike cookie expiry.

Provides functions:
1. login(): POST {user, password}; saves JWT to Local Storage;
2. logout(): removes JWT from Local Storage;
3. register(): POST {user, password, email};
4. getCurrentUser(): get stored user info (including JWT); 
*/

const API_URL = "http://localhost:8080/api/auth/";

/* 
* tests if storage is available
* returns true if localStorage is available and false if it's not
*/
function lsTest(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
};

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
            // execute lsTest and run script
            if (!!lsTest()) {
                localStorage.setItem("user", JSON.stringify(response.data));
                console.log('localStorage where used'); // log
            } else {
                document.cookie=`user=${user}; expires=Mon, 28 Jul 2021 12:00:00 UTC`;
                console.log('Cookie where used'); // log
            }
        }
        return resp.data;
    })
    .catch((err) => console.error(`Failed to login due to ${err}. Please retry or contact Tech Support.`))
};

const logout = () => {
    if (!!lsTest) {
        localStorage.removeItem("user")
    } else {
        Session.Abandon();
        Response.Cookies.Clear();
    }
};

const getCookie = (user) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${user}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

const getCurrentUser = () => {
    if (!!lsTest) {
        return JSON.parse(localStorage.getItem("user"));
    } else {
        getCookie();
    }
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
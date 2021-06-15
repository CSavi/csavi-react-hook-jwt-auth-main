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
3. getCurrentUser(): get stored user info (including JWT); 
*/

const API_URL = "http://localhost:8080/api/auth/";

const user = "csavi";

/* 
* tests if storage is available
* returns true if localStorage is available and false if it's not
*/
const lsTest = () => {
    try {
        localStorage.setItem("user", user);
        localStorage.removeItem(user);
        return true;
    } catch(e) {
        return false;
    }
};


const login = (user, password) => {
    return axios.post(API_URL + 'login', {
        user,
        password,
    })
    .then((resp) => {
        if (resp.data) {
            // execute lsTest and run script
            if (!!lsTest && (!localStorage.getItem("user", user))) {
                localStorage.setItem("user", user);
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
        // Todo: Clear session
    }
};

// const getCookie = (user) => {
//  TODO: parse cookie to get user value
// };

const getCurrentUser = () => {
    if (!!lsTest) {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            console.log(foundUser);
            return foundUser;
        } else {
            return localStorage.setItem("user", user);
        }
    
    } else {
        // Todo: get cookie data;
        console.log("Local Storage is not available.")
    }
};

const AuthService = {
    login,
    logout,
    getCurrentUser,
};

export default AuthService;
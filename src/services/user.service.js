import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getAllData = () => {
    return axios.get(API_URL + 'all');
};

const getUserProfile = () => {
    return axios.get(API_URL + 'user', { headers: authHeader() });
};

const getModeratorProfile = () => {
    return axios.get(API_URL + 'mod', { headers: authHeader() })
};

const getAdminProfile = () => {
    return axios.get(API_URL + 'admin', { headers: authHeader() })
}

export default {
    getAllData,
    getUserProfile,
    getModeratorProfile,
}


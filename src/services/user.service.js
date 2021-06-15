import axios from "axios";
import UseBearerTokenInjections from "./auth-header";
import data from "./data";

const API_URL = "http://localhost:8080/api/";

const getPublicContent = () => {
    // TODO connect to an api to retrieve data
    // return axios.get(API_URL + "all");

    return (
        <div>
            USERS
            {data.map((data, i) => {
                return (
                <div key={i}>
                    <div>First name: {data.first_name}  </div>
                    <div>Last name: {data.last_name}</div>
                    <br/>
                </div>)
            })}
        </div>
        )
  };

const getUserDashboard = () => {
    return axios.get(API_URL + 'user', { headers: UseBearerTokenInjections() });
};

const getModeratorDashboard = () => {
    return axios.get(API_URL + 'mod', { headers: UseBearerTokenInjections() })
};

/* const addUser = (userData) => {
// const newUserData = {}
// TODO: create a post example
//     return axios.post(API_URL, data, { headers: UseBearerTokenInjections()})}
*/

const DataRetriever = {
    getPublicContent,
    getUserDashboard,
    getModeratorDashboard,
};

export default DataRetriever;


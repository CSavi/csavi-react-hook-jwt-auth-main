// Data Service: retrieving data from server; HTTP request needs Authorization header

/* add ‘x-access-token’ to header in src/services/auth-header.js
r
eturn { Authorization: ‘Bearer ‘ + user.accessToken, ‘x-access-token’: user.accessToken };

As the server (middleware/authJwt.js) was looks for ‘x-access-token’
*/

/*
authHeader() checks if ls contains 'user';
if a logged-in user is detected with accessToken (JWT),
return HTTP Authorization header;
otherwise return an empty object;
*/
export default function authHeader() {
    /* TODO: check if localstorage is available; 
    if not, access item through cookie instead;
    */
    const user = JSON.parse(localStorage.getItem("user"));

    if (!!user && !!user.accessToken) {
        return { Authorization: 'Bearer' + user.accessToken }
    } else { 
        return {} 
    }
};

/*
for Node.js Express backend, use:
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}
*/
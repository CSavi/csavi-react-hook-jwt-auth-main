/*
useBearerTokenInjections() checks if ls contains 'user';
if a logged-in user is detected with accessToken (JWT),
return HTTP Authorization header;
otherwise return an empty object || message of user/token not found;
*/
// export default function authHeader() {
  export default function useBearerTokenInjections() {
    /* TODO: check if localstorage is available; 
    if not, access item through cookie instead;
    */
    const user = JSON.parse(localStorage.getItem("user"));

    if (!!user && !!user.accessToken) {
        return { Authorization: 'Bearer' + user.accessToken }
    } else { 
      //TODO: return a message if no user or token is found
        return {} 
    }
};
// import { form } from "react-validation/build/form";
// import CheckButton from "react-validation/build/button";
// import Input from "react-validation/build/input";
// import { isEmail } from "validator";
// import {handleLogin} from "./Login";
import React from "react";
import AuthService from "../services/auth.service";

// Gets current user from local storage and shows user info with token

// TODO: remove commented out code
//const required = (value) => {
//     if (!value) {
//         return (
//             <div className="alert alert-danger" role="alert" >
//                 This field is required.
//             </div>
//         );
//     }
// };

// const email = (value) => {
//     if (!isEmail(value)) {
//         return (
//             <div className="alert alert-danger" role="alert">
//                 This is not a valid email.
//             </div>
//         );
//     }
// };

// render()
//     return (
//         <Form
//             onSubmit={handleLogin}
//             ref={form}
//         >
//             <Input
//                 type="text"
//                 className="form-control"
//                 validations={[required, email]}
//             />
//             <CheckButton
//                 style={{ display: "none"}}
//                 ref={checkBtn}
//             />
//         </Form>
//     );

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();

    return (
        <div className="container">
            <header 
            className="container-header"
            >
                <h3>
                    <strong>{currentUser}</strong>Profile
                </h3>
            </header>
            <p>
                <strong>{currentUser.accessToken}</strong>
            </p>
            <p>
                <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.email}
            </p>
        </div>
    )
}

export default Profile;

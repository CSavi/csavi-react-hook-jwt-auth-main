import React, { useState, useRef } from "react";
import { useHistory } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert" >
                This field is required.
            </div>
        );
    }
};

const Login = (props) => {
    const history = useHistory();
    const form = useRef();
    const checkBtn = useRef();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUser = (e) => {

        const user = e.target.value;
        localStorage.setItem("user", user)
        setUser(user);
    }

    const onChangePassword = (e) => {
        const pass = e.target.value;
        localStorage.setItem("password", pass);
        setPassword(pass);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        setIsLoading(true);

        // TODO: validate all fields and check for any validation errors
        AuthService.login(user, password)
        .then(() => {
            history.push({ pathname: "/profile" });
            // reload the current document
            window.location.reload();
        },
        (err) => {
            const responseMssg = (
                err.response &&
                err.response.data &&
                err.response.data.message
            ) ||
            err.message ||
            err.toString();

            setIsLoading(false);
            setMessage(responseMssg);
        }
        );
        setIsLoading(false);
    } 

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img 
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />
                <Form onSubmit={handleLogin} ref={form} >
                    <div className="form-group">
                        <label htmlFor="user">Username</label>
                        <Input 
                            type="text"
                            className="form-control"
                            name="user"
                            value={user}
                            onChange={onChangeUser}
                            validations={[required]}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" disabled={isLoading}>
                            {isLoading && (
                                // what does this do?
                                <span className="spinner-border spinner-border-sm"/>
                            )}
                            <span>Login</span>
                        </button>
                    </div>
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{display: "none"}} ref={checkBtn}/>
                </Form>
            </div>
        </div>
    )
};

export default Login;
import React, { useState, useRef } from "react";
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
    const form = useRef();
    const checkBtn = useRef();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUser = (e) => {
        const user = e.target.value;
        setUser(user);
    }

    const onChangePassword = (e) => {
        const pass = e.target.value;
        setPassword(pass);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        setIsLoading(true);

        // TODO: validate all fields and check for any validation errors
        AuthService.login(user, password)
        .then(() => {
            props.history.push("/profile");
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
        <div>
            <div>
                <img/>
                <Form>
                    <div>
                        <Input/>
                    </div>
                    <div>
                        <Input/>
                    </div>
                    <div>
                        <Input/>
                    </div>
                    {message && (
                        <div>
                            <div>
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
import { form } from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import {handleLogin} from "./Login";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert" >
                This field is required.
            </div>
        );
    }
};

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

render()
    return (
        <Form
            onSubmit={handleLogin}
            ref={form}
        >
            <Input
                type="text"
                className="form-control"
                validations={[required, email]}
            />
            <CheckButton
                style={{ display: "none"}}
                ref={checkBtn}
            />
        </Form>
    );

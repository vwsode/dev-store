import {NavLink} from "react-router-dom";

import TextField from "../TextField/TextField.tsx";
import Button from "../Button/Button.tsx";
import NikeLogo from "../../assets/icons/nike-logo.svg?react";

const RegisterForm = () => {
    return (
        <div className="reg-form">
            <div className="ref-form__text">
                <NikeLogo/>
                <h5 className="ref-form__title">Create your Nike Member profile and get first access to the very best of
                    Nike products, inspiration and community.</h5>
            </div>
            <form className="reg-form__form">
                <TextField type="text" placeholder="Email address" />
                <TextField type="password" placeholder="Password" />
                <TextField type="text" placeholder="First Name" />
                <TextField type="text" placeholder="Last Name" />
                <TextField type="date" placeholder="Date of birth" />
                <Button variant="dark" rounded={false} type="submit">JOIN US</Button>
            </form>
        </div>
    )
};

export default RegisterForm;
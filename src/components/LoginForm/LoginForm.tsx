import {NavLink} from "react-router-dom";

import TextField from "../TextField/TextField.tsx";
import Button from "../Button/Button.tsx";
import NikeLogo from '../../assets/icons/nike-logo.svg?react';

import {ROUTES} from "../../config/routes.ts";

import './LoginForm.scss';


const LoginForm = () => {
    return (
        <div className='login-form'>
            <div className="login-form__text">
                <NikeLogo/>
                <h5 className="login-form__title">YOUR ACCOUNT FOR EVERYTHING NIKE</h5>
            </div>
            <form className="login-form__form">
                <div className="login-form__form-fields">
                    <TextField placeholder="Eamil address" type="email"/>
                    <TextField placeholder="Password" type="password"/>
                </div>
                <p className="login-form__policy">By logging in, you agree to Nike's <NavLink to={ROUTES.CATALOG}>Privacy
                    Policy</NavLink> and <NavLink to={ROUTES.CATALOG}>Terms of Use.</NavLink></p>
                <Button variant="dark" rounded={false}>SIGN IN</Button>
            </form>
            <p className="login-form__message">
                Not a Member? <NavLink to={ROUTES.REGISTER}>Join Us.</NavLink>
            </p>
        </div>
    )
};

export default LoginForm;
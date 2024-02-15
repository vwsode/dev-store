import {NavLink} from "react-router-dom";

import TextField from "../TextField/TextField.tsx";
import Button from "../Button/Button.tsx";
import NikeLogo from "../../assets/icons/nike-logo.svg?react";

import * as S from './RegisterForm.styles.ts';
import {ROUTES} from "../../config/routes.ts";
import Checkbox from "../Checkbox/Checkbox.tsx";

const RegisterForm = () => {
    return (
        <S.Wrapper>
            <S.Top>
                <NikeLogo/>
                <S.Title>BECOME A NIKE MEMBER</S.Title>
                <S.Description>Create your Nike Member profile and get first access to the very best of
                    Nike products, inspiration and community.</S.Description>
            </S.Top>
            <S.Form >
                <S.FormFields>
                    <TextField type="email" placeholder="Email address" />
                    <TextField type="password" placeholder="Password" />
                    <TextField type="text" placeholder="First Name" />
                    <TextField type="text" placeholder="Last Name" />
                    <TextField type="text" placeholder="Date of birth" />
                </S.FormFields>
                <Checkbox label="Sign up for emails to get updates from Nike on products, offers and your Member benefits" />
                <S.FormPolicy>
                    By creating an account, you agree to Nike's <a href="#">Privacy Policy</a> and <a href="#">Terms of Use.</a>
                </S.FormPolicy>
                <S.FormActions>
                    <Button variant="dark" rounded={false} type="submit">JOIN US</Button>
                </S.FormActions>
            </S.Form>
                <S.FormMessage>Already a Member? <NavLink to={ROUTES.LOGIN}>Sign In.</NavLink></S.FormMessage>
        </S.Wrapper>
    )
};

export default RegisterForm;
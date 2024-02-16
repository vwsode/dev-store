import {NavLink} from "react-router-dom";
import {useFormik} from 'formik';
import * as yup from "yup";

import TextField from "../TextField/TextField.tsx";
import Button from "../Button/Button.tsx";

import {ROUTES} from "../../config/routes.ts";

import * as S from './LoginForm.styles.ts';

import NikeLogo from '../../assets/icons/nike-logo.svg?react';

const EMAIL_REGX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const LoginSchema = yup.object().shape({
    email: yup.string()
        .matches(EMAIL_REGX, "Invalid email address")
        .required('Required Field'),
    password: yup.string()
        .required('Required field'),
});

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validateOnBlur: true,
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            formik.resetForm();
        }
    });

    return (
        <S.Wrapper>
            <S.Text>
                <NikeLogo/>
                <S.Title>YOUR ACCOUNT FOR EVERYTHING NIKE</S.Title>
            </S.Text>
            <S.Form
                onSubmit={formik.handleSubmit}
            >
                <S.FormFields>
                    <TextField
                        placeholder="Eamil address"
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        hint={formik.errors.email}
                        isError={!!formik.errors.email}
                    />
                    <TextField
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        hint={formik.errors.password}
                        isError={!!formik.errors.password}
                    />
                </S.FormFields>
                <S.FormPolicy>
                    By logging in, you agree to Nike's
                    <NavLink to={ROUTES.CATALOG}>Privacy Policy</NavLink>
                    and
                    <NavLink to={ROUTES.CATALOG}>Terms of Use.</NavLink>
                </S.FormPolicy>
                <Button variant="dark" rounded={false}>SIGN IN</Button>
            </S.Form>
            <S.Message>
                Not a Member? <NavLink to={ROUTES.REGISTER}>Join Us.</NavLink>
            </S.Message>
        </S.Wrapper>
    )
};

export default LoginForm;
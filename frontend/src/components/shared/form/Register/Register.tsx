import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';

import TextField from '../../ui/TextField/TextField.tsx';
import Checkbox from '../../ui/Checkbox/Checkbox.tsx';
import Button from '../../ui/Button/Button.tsx';

import useUser from '../../../../hooks/useUser.ts';
import { ROUTES } from '../../../../config/routes.ts';
import { schema } from '../../../../utils/validationSchemas/registerSchema.ts';

import * as S from './Register.styles.ts';
// import NikeLogo from "../../assets/icons/nike-logo.svg?react";

const RegisterForm = () => {
    const { register, error } = useUser();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: 'frscode1@gmail.com',
            password: 'asdfasdf123',
            confirmPassword: 'asdfasdf123',
            firstName: 'Fedor',
            lastName: 'Zubov',
            dateOfBirth: '2003-12-23',
        },
        validateOnChange: true,
        validationSchema: schema,
        onSubmit: async (values) => {
            try {
                await register({
                    username: values.email,
                    password: values.password,
                    dateOfBirth: values.dateOfBirth,
                    firstName: values.firstName,
                    lastName: values.lastName,
                });

                if (!error) {
                    navigate(ROUTES.PROFILE);
                }

                formik.resetForm();
            } catch (error) {
                // Обработка ошибок, если register завершился с ошибкой
                console.error('Registration failed:', error);
            }
        },
    });

    const { handleSubmit, values, handleChange, errors } = formik;

    return (
        <S.Wrapper>
            <S.Top>
                {/*<NikeLogo />*/}
                <S.Title>BECOME A NIKE MEMBER</S.Title>
                <S.Description>
                    Create your Nike Member profile and get first access to the
                    very best of Nike products, inspiration and community.
                </S.Description>
            </S.Top>
            <p>{error}</p>
            <S.Form onSubmit={handleSubmit}>
                <S.FormFields>
                    <TextField
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        hintText={errors.email}
                        isError={!!errors.email}
                        type="email"
                        placeholder="Email address"
                    />
                    <TextField
                        onChange={handleChange}
                        name="password"
                        value={values.password}
                        hintText={errors.password}
                        isError={!!errors.password}
                        type="password"
                        placeholder="Password"
                        autoComplete="on"
                    />
                    <TextField
                        autoComplete="on"
                        onChange={handleChange}
                        name="confirmPassword"
                        value={values.confirmPassword}
                        hintText={errors.confirmPassword}
                        isError={!!errors.confirmPassword}
                        type="password"
                        placeholder="Confirm password"
                    />
                    <TextField
                        onChange={handleChange}
                        name="firstName"
                        value={values.firstName}
                        hintText={errors.firstName}
                        isError={!!errors.firstName}
                        type="text"
                        placeholder="First Name"
                    />
                    <TextField
                        onChange={handleChange}
                        name="lastName"
                        value={values.lastName}
                        hintText={errors.lastName}
                        isError={!!errors.lastName}
                        type="text"
                        placeholder="Last Name"
                    />
                    <TextField
                        onChange={handleChange}
                        name="dateOfBirth"
                        value={values.dateOfBirth}
                        hintText={errors.email}
                        isError={!!errors.dateOfBirth}
                        type="text"
                        placeholder="Date of birth (YYYY-MM-DD)"
                    />
                </S.FormFields>
                <Checkbox label="Sign up for emails to get updates from Nike on products, offers and your Member benefits" />
                <S.FormPolicy>
                    By creating an account, you agree to Nike's{' '}
                    <a href="#">Privacy Policy</a> and{' '}
                    <a href="#">Terms of Use.</a>
                </S.FormPolicy>
                <S.FormActions>
                    <Button variant="dark" rounded={false} type="submit">
                        JOIN US
                    </Button>
                </S.FormActions>
            </S.Form>
            <S.FormMessage>
                Already a Member? <NavLink to={ROUTES.LOGIN}>Sign In.</NavLink>
            </S.FormMessage>
        </S.Wrapper>
    );
};

export default RegisterForm;

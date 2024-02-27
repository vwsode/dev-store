import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import TextField from '../../ui/TextField/TextField.tsx';
import Button from '../../ui/Button/Button.tsx';

import { ROUTES } from '../../../../config/routes.ts';
import { schema } from '../../../../utils/validationSchemas/loginSchema.ts';

import * as S from './Login.styles.ts';
import useUser from '../../../../hooks/useUser.ts';

const Login = () => {
    const { login } = useUser();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: 'frscode2@gmail.com',
            password: 'atlz1337',
        },
        validateOnBlur: true,

        validationSchema: schema,
        onSubmit: (values) => {
            login(values.email, values.password);
            formik.resetForm();
            navigate(ROUTES.CATALOG);
        },
    });

    const { handleSubmit, values, handleChange, errors } = formik;

    return (
        <S.Wrapper>
            <S.Text>
                {/*<NikeLogo />*/}
                <S.Title>YOUR ACCOUNT FOR EVERYTHING NIKE</S.Title>
            </S.Text>
            <S.Form onSubmit={handleSubmit}>
                <S.FormFields>
                    <TextField
                        placeholder="Eamil address"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        hintText={errors.email}
                        isError={!!errors.email}
                    />
                    <TextField
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        hintText={errors.password}
                        isError={!!errors.password}
                    />
                </S.FormFields>
                <S.FormPolicy>
                    By logging in, you agree to Nike's{' '}
                    <NavLink to={ROUTES.CATALOG}> Privacy Policy</NavLink> and{' '}
                    <NavLink to={ROUTES.CATALOG}> Terms of Use.</NavLink>
                </S.FormPolicy>
                <Button variant="dark" rounded={false}>
                    SIGN IN
                </Button>
            </S.Form>
            <S.Message>
                Not a Member? <NavLink to={ROUTES.REGISTER}>Join Us.</NavLink>
            </S.Message>
        </S.Wrapper>
    );
};

export default Login;

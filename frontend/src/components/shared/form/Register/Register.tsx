import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";

import TextField from "../../ui/TextField/TextField.tsx";
import Checkbox from "../../ui/Checkbox/Checkbox.tsx";
import Button from "../../ui/Button/Button.tsx";

import useUser from "../../../../hooks/useUser.ts";
import { ROUTES } from "../../../../config/routes.ts";
import { schema } from "../../../../utils/validationSchemas/registerSchema.ts";

import * as S from "./Register.styles.ts";
// import NikeLogo from "../../assets/icons/nike-logo.svg?react";

const RegisterForm = () => {
  const { register } = useUser();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
    },
    validateOnChange: true,
    validationSchema: schema,
    onSubmit: (values) => {
      register({
        password: values.password,
        email: values.email,
        username: values.firstName,
      });

      // Исправить редирект
      navigate(ROUTES.PROFILE);

      formik.resetForm();
    },
  });

  const { handleSubmit, values, handleChange, errors } = formik;

  return (
    <S.Wrapper>
      <S.Top>
        {/*<NikeLogo />*/}
        <S.Title>BECOME A NIKE MEMBER</S.Title>
        <S.Description>
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration and community.
        </S.Description>
      </S.Top>
      <S.Form onSubmit={handleSubmit}>
        <S.FormFields>
          <TextField
            onChange={handleChange}
            name="email"
            value={values.email}
            hint={errors.email}
            isError={!!errors.email}
            type="email"
            placeholder="Email address"
          />
          <TextField
            onChange={handleChange}
            name="password"
            value={values.password}
            hint={errors.password}
            isError={!!errors.password}
            type="password"
            placeholder="Password"
          />
          <TextField
            onChange={handleChange}
            name="confirmPassword"
            value={values.confirmPassword}
            hint={errors.confirmPassword}
            isError={!!errors.confirmPassword}
            type="password"
            placeholder="Confirm password"
          />
          <TextField
            onChange={handleChange}
            name="firstName"
            value={values.firstName}
            hint={errors.firstName}
            isError={!!errors.firstName}
            type="text"
            placeholder="First Name"
          />
          <TextField
            onChange={handleChange}
            name="lastName"
            value={values.lastName}
            hint={errors.lastName}
            isError={!!errors.lastName}
            type="text"
            placeholder="Last Name"
          />
          <TextField
            onChange={handleChange}
            name="dateOfBirth"
            value={values.dateOfBirth}
            hint={errors.dateOfBirth}
            isError={!!errors.dateOfBirth}
            type="text"
            placeholder="Date of birth"
          />
        </S.FormFields>
        <Checkbox label="Sign up for emails to get updates from Nike on products, offers and your Member benefits" />
        <S.FormPolicy>
          By creating an account, you agree to Nike's{" "}
          <a href="#">Privacy Policy</a> and <a href="#">Terms of Use.</a>
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

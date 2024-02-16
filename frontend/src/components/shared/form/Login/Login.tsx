import { NavLink } from "react-router-dom";
import { useFormik } from "formik";

import TextField from "../../ui/TextField/TextField.tsx";
import Button from "../../ui/Button/Button.tsx";

import { ROUTES } from "../../../../config/routes.ts";
import { schema } from "../../../../utils/validationSchemas/loginSchema.ts";

// import NikeLogo from "../../../../assets/icons/nike-logo.svg?react";
import * as S from "./Login.styles.ts";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnBlur: true,

    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
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
            hint={errors.email}
            isError={!!errors.email}
          />
          <TextField
            placeholder="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            hint={errors.password}
            isError={!!errors.password}
          />
        </S.FormFields>
        <S.FormPolicy>
          By logging in, you agree to Nike's{" "}
          <NavLink to={ROUTES.CATALOG}> Privacy Policy</NavLink> and{" "}
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

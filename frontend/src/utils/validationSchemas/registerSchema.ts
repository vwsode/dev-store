import * as yup from 'yup';
import { EMAIL_REGEX } from '../regex.ts';

export const schema = yup.object().shape({
    email: yup.string().matches(EMAIL_REGEX, 'Invalid email address').required('Required Field'),
    password: yup
        .string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .required('Required field'),
    confirmPassword: yup
        .string()
        .required('Required Field')
        .oneOf([yup.ref('password'), ''], 'Passwords must match'),
    firstName: yup
        .string()
        .min(2, 'Firstname is too short - should be 4 chars minimum.')
        .required('Required field'),
    lastName: yup
        .string()
        .min(2, 'Lastname is too short - should be 4 chars minimum.')
        .required('Required field'),
    dateOfBirth: yup.string().required('Required field'),
});

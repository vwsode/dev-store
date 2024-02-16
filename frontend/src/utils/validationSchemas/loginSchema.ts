import * as yup from "yup";
import {EMAIL_REGEX} from "../regex.ts";

export const schema = yup.object().shape({
    email: yup.string()
        .matches(EMAIL_REGEX, "Invalid email address")
        .required('Required Field'),
    password: yup.string()
        .required('Required field'),
});
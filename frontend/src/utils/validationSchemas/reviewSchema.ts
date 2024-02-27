import * as yup from 'yup';

export const schema = yup.object().shape({
    title: yup
        .string()
        .max(150, 'Maximum 150 characters')
        .required('Required Field'),
    text: yup
        .string()
        .min(30, 'Minimum 30 characters')
        .max(300, 'Maximum 300 characters')
        .required('Required field'),
});

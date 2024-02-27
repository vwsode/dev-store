import * as yup from 'yup';

export const schema = yup.object().shape({
    size: yup.string().required('Required Field'),
});

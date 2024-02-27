import { useFormik } from 'formik';

import { schema } from '../../../../utils/validationSchemas/reviewSchema';

import ReviewsRating from '../../../reviews/ReviewsRating/ReviewsRating';
import Button from '../../ui/Button/Button';
import Checkbox from '../../ui/Checkbox/Checkbox';
import TextArea from '../../ui/TextArea/TextArea';
import TextField from '../../ui/TextField/TextField';

import styles from './ReviewForm.module.scss';

const ReviewForm = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            text: '',
            policy: false,
            rating: 0,
        },
        validationSchema: schema,
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log(values);
            formik.resetForm();
        },
    });

    const { handleSubmit, values, errors, handleChange, setFieldValue } =
        formik;

    const handleRatingChange = (rating: number) => {
        setFieldValue('rating', rating);
    };

    return (
        <form onSubmit={handleSubmit} className={styles['form']}>
            <ReviewsRating
                onRatingChange={handleRatingChange}
                defaultRating={values.rating}
                inputName="rating"
                maxRating={5}
            />

            <div className={styles['fields']}>
                <TextField
                    name="title"
                    isError={!!errors.title}
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                    placeholder="Review title"
                    hintText={
                        errors.title
                            ? errors.title
                            : 'Summarize your review in 150 characters or less.'
                    }
                />
                <TextArea
                    name="text"
                    isError={!!errors.text}
                    value={values.text}
                    onChange={handleChange}
                    placeholder="Review text"
                    hintText={
                        errors.text
                            ? errors.text
                            : 'Describe what you liked, what you didn’t like, and other key things shoppers should know. Minimum 30 characters.'
                    }
                />

                <Checkbox
                    name="policy"
                    onChange={handleChange}
                    checked={values.policy}
                    required={true}
                    label="By ticking the checkbox, I agree to the Privacy Policy, Terms of Use, and Terms of Service"
                />
            </div>

            <Button
                className={styles['btn-submit']}
                variant="dark"
                type="submit"
            >
                Submit
            </Button>
        </form>
    );
};

export default ReviewForm;

import Button from '../../ui/Button/Button';
import Checkbox from '../../ui/Checkbox/Checkbox';
import TextArea from '../../ui/TextArea/TextArea';
import TextField from '../../ui/TextField/TextField';

import styles from './ReviewForm.module.scss';

const ReviewForm = () => {
    return (
        <form className={styles['form']}>
            <div className={styles['fields']}>
                <TextField
                    placeholder="Review title"
                    hintText="Summarize your review in 150 characters or less."
                />
                <TextArea
                    placeholder="Review text"
                    hintText="Describe what you liked, what you didn’t like, and other key things shoppers should know. Minimum 30 characters."
                />

                <Checkbox label="By ticking the checkbox, I agree to the Privacy Policy, Terms of Use, and Terms of Service" />
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

import Modal from '../../shared/ui/Modal/Modal';
import ReviewForm from '../../shared/form/ReviewForm/ReviewForm';

import styles from './ReviewsModal.module.scss';
import ProductMini from '../../product/ProductMini/ProductMini';
import useProducts from '../../../hooks/useProducts';
import { ROUTES } from '../../../config/routes';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const ReviewModal = ({ isOpen = false, onClose }: Props) => {
    const { product } = useProducts();

    return (
        <Modal onClose={onClose} isOpen={isOpen}>
            <Modal.Header>
                <div className={styles['text']}>
                    <h2 className={styles['title']}>Write a Review</h2>
                    <p className={styles['description']}>
                        Share your thoughts with the community.
                    </p>
                </div>
                <ProductMini
                    image={product.main_image}
                    title={product.name}
                    description={product.category}
                    link={`${ROUTES.CATALOG}/${product.id}`}
                />
            </Modal.Header>
            <Modal.Body>
                <ReviewForm />
            </Modal.Body>
        </Modal>
    );
};

export default ReviewModal;

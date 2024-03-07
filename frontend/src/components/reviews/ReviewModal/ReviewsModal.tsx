import ProductItemMini from '@/components/ProductItemMini/ProductItemMini';
import ReviewForm from '@/components/shared/form/ReviewForm/ReviewForm';
import { Modal } from '@/components/shared/ui';

import useProducts from '@/hooks/useProducts';
import { ROUTES } from '@/config/routes';

import s from './ReviewsModal.module.scss';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const ReviewModal = ({ isOpen = false, onClose }: Props) => {
    const { product } = useProducts();

    return (
        <Modal onClose={onClose} isOpen={isOpen}>
            <Modal.Header>
                <div className={s['text']}>
                    <h2 className={s['title']}>Write a Review</h2>
                    <p className={s['description']}>
                        Share your thoughts with the community.
                    </p>
                </div>
                <ProductItemMini
                    image={product.mainImage}
                    title={product.product.name}
                    description={product.product.category}
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

import { FC, useState } from 'react';
import ReviewsItem from '../ReviewsItem/ReviewsItem.tsx';

import { Review } from '../../../types/types';

import * as S from './ReviewsList.styles.ts';
import Button from '../../shared/ui/Button/Button.tsx';
import ReviewModal from '../ReviewModal/ReviewsModal.tsx';

interface IReviews {
    reviews: Review[];
    totalRating: number;
    productName: string;
}

const ReviewsList: FC<IReviews> = ({ reviews, totalRating, productName }) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const openModal = (): void => {
        setIsOpenModal(true);
    };

    const closeModal = (): void => {
        setIsOpenModal(false);
    };

    return (
        <S.Details>
            <S.Summary>
                <S.Title>Reviews ({reviews.length})</S.Title>
                <S.Rating>
                    {Array(totalRating)
                        .fill('')
                        .map(() => (
                            <S.Star
                                key={window.crypto.randomUUID()}
                                variant="default"
                            />
                        ))}

                    {Array(5)
                        .fill('')
                        .map((_, idx) => {
                            if (idx >= totalRating)
                                return (
                                    <S.Star
                                        key={window.crypto.randomUUID()}
                                        variant="secondary"
                                    />
                                );
                        })}
                </S.Rating>
            </S.Summary>
            <S.Content>
                {reviews.length < 1 ? (
                    <S.Description>
                        Have your say. Be the first to review the {productName}.
                    </S.Description>
                ) : (
                    ''
                )}
                <Button variant="cta" onClick={openModal}>
                    Write a Review
                </Button>

                {reviews.map((review) => (
                    <ReviewsItem
                        key={window.crypto.randomUUID()}
                        name={`${review.username.firstName} ${review.username.lastName}`}
                        date={review.time_created}
                        rating={review.star}
                        title={review.title}
                        description={review.text}
                    />
                ))}
            </S.Content>

            <ReviewModal isOpen={isOpenModal} onClose={closeModal} />
        </S.Details>
    );
};

export default ReviewsList;

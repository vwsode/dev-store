import { useState } from 'react';
import Star from '../../shared/ui/Star/Star';
import styles from './ReviewsRating.module.scss';

interface Props {
    maxRating: number;
    inputName: string;
    defaultRating: number;
    onRatingChange: (rating: number) => void;
}

const ReviewsRating = ({
    maxRating,
    inputName,
    defaultRating,
    onRatingChange,
}: Props) => {
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleMouseEnter = (rating: number) => {
        setHoveredRating(rating);
    };

    const handleMouseLeave = () => {
        setHoveredRating(0);
    };

    const handleStarClick = (rating: number) => {
        onRatingChange(rating);
    };

    const renderRating = () => {
        const stars = [];

        for (let i = 1; i <= maxRating; i++) {
            stars.push(
                <label
                    key={i}
                    className={styles['rating-label']}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleStarClick(i)}
                >
                    <Star
                        variant={
                            defaultRating >= i || hoveredRating >= i
                                ? 'filled'
                                : 'default'
                        }
                        size="lg"
                    />
                    <input
                        value={i + 1}
                        className={styles['rating-input']}
                        type="radio"
                        name={inputName}
                        checked={defaultRating === i}
                        onChange={() => {}}
                    />
                </label>,
            );
        }

        return stars;
    };

    return (
        <div className={styles['wrapper']}>
            <span className={styles['title']}>Overall rating *</span>
            <div className={styles['rating']}>{renderRating()}</div>
        </div>
    );
};

export default ReviewsRating;

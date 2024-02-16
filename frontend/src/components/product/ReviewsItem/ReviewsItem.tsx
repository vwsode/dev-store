import * as S from "./Reviews.styles.ts";
import { FC } from "react";

interface IReviewsItem {
  title: string;
  rating: number;
  name: string;
  description: string;
}

const ReviewsItem: FC<IReviewsItem> = ({
  title,
  rating,
  name,
  description,
}) => {
  return (
    <S.Review>
      <S.Title>{title}</S.Title>
      <S.Rating>
        {Array(rating)
          .fill("")
          .map(() => (
            <S.Star variant="default" key={window.crypto.randomUUID()} />
          ))}
        {Array(5)
          .fill("")
          .map((_, idx) => {
            if (idx >= rating) {
              return (
                <S.Star variant="secondary" key={window.crypto.randomUUID()} />
              );
            }
          })}
      </S.Rating>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
    </S.Review>
  );
};

export default ReviewsItem;

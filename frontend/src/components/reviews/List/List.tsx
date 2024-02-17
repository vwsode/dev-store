import { FC } from "react";
import Item from "../Item/Item.tsx";

import { Review } from "../../../types/types";

import * as S from "./List.styles.ts";
import Button from "../../shared/ui/Button/Button.tsx";

interface IReviews {
  reviews: Review[];
  totalRating: number;
  productName: string;
}

const List: FC<IReviews> = ({ reviews, totalRating, productName }) => {
  return (
    <S.Details>
      <S.Summary>
        <S.Title>Reviews ({reviews.length})</S.Title>
        <S.Rating>
          {Array(totalRating)
            .fill("")
            .map(() => (
              <S.Star variant="default" />
            ))}

          {Array(5)
            .fill("")
            .map((_, idx) => {
              if (idx >= totalRating) return <S.Star variant="secondary" />;
            })}
        </S.Rating>
      </S.Summary>
      <S.Content>
        {reviews.length < 1 ? (
          <S.Description>
            Have your say. Be the first to review the {productName}.
          </S.Description>
        ) : (
          ""
        )}
        <Button variant="cta">Write a Review</Button>

        {reviews.map((review) => (
          <Item
            key={window.crypto.randomUUID()}
            name={review.username}
            date={review.time_created}
            rating={review.star}
            title={review.title}
            description={review.text}
          />
        ))}
      </S.Content>
    </S.Details>
  );
};

export default List;

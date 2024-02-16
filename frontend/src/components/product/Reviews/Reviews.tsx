import * as S from "./Reviews.styles.ts";
import ReviewsItem from "../ReviewsItem/ReviewsItem.tsx";

const Reviews = () => {
  return (
    <S.Details>
      <S.Summary>
        <S.Title>Reviews (142)</S.Title>
        <S.Rating>
          <S.Star />
          <S.Star />
          <S.Star />
          <S.Star />
          <S.Star />
        </S.Rating>
      </S.Summary>
      <S.Content>
        <ReviewsItem />
        <ReviewsItem />
        <ReviewsItem />
      </S.Content>
    </S.Details>
  );
};

export default Reviews;

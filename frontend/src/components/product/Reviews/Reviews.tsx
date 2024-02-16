import ReviewsItem from "../ReviewsItem/ReviewsItem.tsx";

import * as S from "./Reviews.styles.ts";

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
        <ReviewsItem
          name="Speedster20 - Feb 14, 2024"
          rating={2}
          title="Nice"
          description="At first, I was a little iffy about them, but try them on. They are very comfortable and snug around the ankle."
        />
        <ReviewsItem
          name={"asdf"}
          rating={4}
          title={"asdf"}
          description={"fasd"}
        />
        <ReviewsItem
          name={"asdf"}
          rating={3}
          title={"asdf"}
          description={"fasd"}
        />
        <ReviewsItem
          name={"asdf"}
          rating={2}
          title={"asdf"}
          description={"fasd"}
        />
        <ReviewsItem
          name={"asdf"}
          rating={1}
          title={"asdf"}
          description={"fasd"}
        />
      </S.Content>
    </S.Details>
  );
};

export default Reviews;

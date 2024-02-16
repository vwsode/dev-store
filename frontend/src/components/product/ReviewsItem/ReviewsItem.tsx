import * as S from "./Reviews.styles.ts";

const ReviewsItem = () => {
  return (
    <S.Review>
      <S.Title>Best Buy!</S.Title>
      <S.Rating>
        <S.Star />
        <S.Star />
        <S.Star />
        <S.Star />
        <S.Star />
      </S.Rating>
      <S.Name>Nikki - Nov 29, 2023</S.Name>
      <S.Description>
        [This review was collected as part of a promotion.] My son loves these
        gloves. They’re well made and of good quality.
      </S.Description>
      <p></p>
      <p></p>
    </S.Review>
  );
};

export default ReviewsItem;

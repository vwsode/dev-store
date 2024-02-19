import * as S from "./ReviewsItem.styles.ts";
import { FC } from "react";
import { convertDateToLocalString } from "../../../utils/convert/date.ts";

interface IReviewsItem {
  title: string;
  rating: number;
  name: string;
  description: string;
  date: string;
}

const Item: FC<IReviewsItem> = ({ title, rating, name, description, date }) => {
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
      <S.Name>
        {name} - {convertDateToLocalString(date)}
      </S.Name>
      <S.Description>{description}</S.Description>
    </S.Review>
  );
};

export default Item;

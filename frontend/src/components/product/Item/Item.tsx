import { Product } from "../../types/types";

import * as S from "./Item.styles.ts";

interface ProductCardProps extends Product {}

const ProductItem = ({
  id,
  name,
  price,
  color,
  category,
  main_image,
}: ProductCardProps) => {
  return (
    <S.Card>
      <S.Overlay to={`${id}`} />
      <S.Image src={main_image} alt={name} />
      <S.Info>
        <S.Messaging>Coming Soon</S.Messaging>
        <S.Titles>
          <S.Title>{name}</S.Title>
          <S.Subtitle>{category}</S.Subtitle>
        </S.Titles>
        <S.Count>{color.length} Color</S.Count>
        <S.Price>${price}</S.Price>
      </S.Info>
    </S.Card>
  );
};

export default ProductItem;

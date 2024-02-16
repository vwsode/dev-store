import Item from "../Item/Item.tsx";

import { Product } from "../../../types/types";

import * as S from "./Grid.styles.ts";

interface IGrid {
  products: Product[];
}

const Grid = ({ products }: IGrid) => {
  return (
    <S.Grid>
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </S.Grid>
  );
};

export default Grid;

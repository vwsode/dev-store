import * as S from "./SizeSelect.styles.ts";

interface ISizeSelect {
  sizes: number[];
  name: string;
}

const SizeSelect = ({ sizes, name }: ISizeSelect) => {
  return (
    <S.Fieldset>
      <S.Legend>
        <S.LegendTitle>Select Size</S.LegendTitle>
        <S.LegendLink to="/catalog">Size Guide</S.LegendLink>
      </S.Legend>
      <S.Grid>
        {sizes.map((size) => (
          <S.Field>
            <S.FieldInput name={name} type="radio" />
            <S.FieldText>{size}</S.FieldText>
          </S.Field>
        ))}
      </S.Grid>
    </S.Fieldset>
  );
};

export default SizeSelect;

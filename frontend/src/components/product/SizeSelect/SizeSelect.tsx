import * as S from "./SizeSelect.styles.ts";

const SizeSelect = () => {
  return (
    <S.Fieldset>
      <S.Legend>
        <S.LegendTitle>Select Size</S.LegendTitle>
        <S.LegendLink to="">Size Guide</S.LegendLink>
      </S.Legend>
      <S.Grid>
        <S.Field>
          <S.FieldInput name="size" type="radio" />
          <S.FieldText>M 3.5 / W 5</S.FieldText>
        </S.Field>
        <S.Field>
          <S.FieldInput name="size" type="radio" />
          <S.FieldText>M 4 / W 5.5</S.FieldText>
        </S.Field>
        <S.Field>
          <S.FieldInput name="size" type="radio" />
          <S.FieldText>M 3.5 / W 5</S.FieldText>
        </S.Field>
        <S.Field>
          <S.FieldInput name="size" type="radio" />
          <S.FieldText>M 4 / W 5.5</S.FieldText>
        </S.Field>
        <S.Field>
          <S.FieldInput name="size" type="radio" />
          <S.FieldText>M 3.5 / W 5</S.FieldText>
        </S.Field>
        <S.Field>
          <S.FieldInput name="size" type="radio" />
          <S.FieldText>M 4 / W 5.5</S.FieldText>
        </S.Field>
        <S.Field>
          <S.FieldInput name="size" type="radio" />
          <S.FieldText>M 3.5 / W 5</S.FieldText>
        </S.Field>
        <S.Field>
          <S.FieldInput name="size" type="radio" />
          <S.FieldText>M 4 / W 5.5</S.FieldText>
        </S.Field>
      </S.Grid>
    </S.Fieldset>
  );
};

export default SizeSelect;

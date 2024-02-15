import React from 'react';
import {NavLink} from "react-router-dom";

import * as S from './SizeGrid.types.ts';

interface ISelectGrid {

}

const SizeGrid = ({}: ISelectGrid) => {
    return (
        <S.Fieldset>
            <S.Legend>
                <S.LegendTitle>Select Size</S.LegendTitle>
                <S.LegendLink to="">Size Guide</S.LegendLink>
            </S.Legend>
            <S.Grid>
                <S.Field>
                    <S.FieldInput name="size" type="radio"/>
                    <S.FieldText>M 3.5 / W 5</S.FieldText>
                </S.Field>
                <S.Field>
                    <S.FieldInput name="size" type="radio"/>
                    <S.FieldText>M 4 / W 5.5</S.FieldText>
                </S.Field>
                <S.Field>
                    <S.FieldInput name="size" type="radio"/>
                    <S.FieldText>M 3.5 / W 5</S.FieldText>
                </S.Field>
                <S.Field>
                    <S.FieldInput name="size" type="radio"/>
                    <S.FieldText>M 4 / W 5.5</S.FieldText>
                </S.Field>
                <S.Field>
                    <S.FieldInput name="size" type="radio"/>
                    <S.FieldText>M 3.5 / W 5</S.FieldText>
                </S.Field>
                <S.Field>
                    <S.FieldInput name="size" type="radio"/>
                    <S.FieldText>M 4 / W 5.5</S.FieldText>
                </S.Field>
                <S.Field>
                    <S.FieldInput name="size" type="radio"/>
                    <S.FieldText>M 3.5 / W 5</S.FieldText>
                </S.Field>
                <S.Field>
                    <S.FieldInput name="size" type="radio"/>
                    <S.FieldText>M 4 / W 5.5</S.FieldText>
                </S.Field>
            </S.Grid>
        </S.Fieldset>
    )
};

export default SizeGrid;
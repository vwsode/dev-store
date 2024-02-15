import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Fieldset = styled.fieldset`
  border: none;
`;
export const Legend = styled.legend`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const LegendTitle = styled.span`
  color: var(--gray-100);
  font-weight: 600;
`;
export const LegendLink = styled(NavLink)`
  color: var(--gray-400);
  font-weight: 600;
  text-decoration: none;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 8px;
`;

export const Field = styled.label`
  cursor: pointer;
  
  &:hover, &:focus-within {
    span {
      box-shadow: var(--gray-400) 0px 0px 0px 1px;
    }
  }
  
  &:active span {
    background: var(--gray-700);
  }
  
`;
export const FieldInput = styled.input`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
  
  &:checked ~ span {
      box-shadow: var(--gray-300) 0px 0px 0px 1px;
    
  }
`;
export const FieldText = styled.span`
  -moz-box-flex: 1;
  flex-grow: 1;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  color: rgb(17, 17, 17);
  box-shadow: var(--gray-500) 0px 0px 0px 1px;
  height: 48px;
  border-radius: 4px;
  
  
`;
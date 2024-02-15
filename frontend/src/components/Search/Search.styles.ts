import styled from "styled-components";

export const Label = styled.label`
  visibility: visible;
  width: 100%;
  color: inherit;
  padding: 8px 48px 8px 12px;
  gap: 12px;
  cursor: text;
  border-radius: 100px;
  height: 40px;
  
  display: flex;
  align-items: center;
  
  max-width: 200px;

    background: var(--gray-700);
  &:hover {
    background: var(--gray-600);
  }
`;
export const IconSearch = styled.i`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input`
  appearance: none;
  border: none;
  outline: none;
  background: transparent;

  width: auto;
  
  font-size: 16px;
  font-weight: 600;
  
  font-family: inherit;
  
  max-width: 130px;
  
  color: var(--gray-200);
  
  &::placeholder {
    color: var(--gray-400);
  }
`;

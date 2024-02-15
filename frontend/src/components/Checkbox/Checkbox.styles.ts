import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

export const Icon = styled.span`
  position: relative;
`;

export const Input  = styled.input`
  appearance: none;
  border: 1px solid var(--gray-300);
  border-radius: 4px;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  
  cursor: pointer;
  
  &::before {
    //content: '';
    color: var(--gray-900);
    position: absolute;
    width: 12px;
    height: 8px;
    border-bottom: solid 2px currentColor;
    border-left: solid 2px currentColor;

    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%)  rotate(-45deg);
  }
  
  &:checked {
    background: var(--gray-200);
    border-color: var(--gray-200);
    
    &::before {
      content: '';
    }
  }
  
  transition: border-color 100ms, background-color 100ms;
  
  &:hover {
    border-color: var(--gray-200);
  }
`;
export const Text = styled.span`
  font-size: 14px;
  color: var(--gray-300);
`;
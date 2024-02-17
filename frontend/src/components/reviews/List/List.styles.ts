import styled from "styled-components";

export const Details = styled.details`
  box-shadow:
    inset 0 1px 0 0 var(--gray-600),
    inset 0 -1px 0 0 var(--gray-600);

  &[open] summary::after {
    transform: rotate(-135deg);
    top: calc(50% - 4px);
  }
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  color: var(--gray-200);
`;
export const Rating = styled.div`
  margin-right: 24px;
`;
export const Star = styled.span<{
  variant: "secondary" | "default";
}>`
  &::before {
    content: "★";
    font-size: 20px;
    color: ${(props) =>
      props.variant !== "secondary" ? "var(--gray-200)" : "var(--gray-600)"};
  }

  margin-right: 4px;
`;

export const Summary = styled.summary`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;

  position: relative;
  padding: 28px 0;
  background: transparent;
  width: 100%;

  &::after {
    //transform-origin: -50 50%;
    content: "";
    position: absolute;
    right: 6px;
    top: calc(50% - 6px);
    border: 0 solid black;
    border-right-width: 3px;
    border-bottom-width: 3px;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
  }
`;
export const Content = styled.div`
  padding: 20px 0 40px 0;
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--gray-100);
  line-height: 26px;
`;

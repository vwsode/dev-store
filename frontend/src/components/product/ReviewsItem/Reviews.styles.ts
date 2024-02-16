import styled from "styled-components";

export const Review = styled.div`
  margin-bottom: 40px;
`;
export const Title = styled.h4`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
`;
export const Name = styled.p`
  padding-left: 16px;
  color: var(--gray-300);
  font-size: 16px;
  font-weight: 500;
  display: inline-block;
`;
export const Rating = styled.div`
  display: inline-block;
`;
export const Star = styled.span`
  &::before {
    content: "★";
    font-size: 18px;
  }
`;
export const Description = styled.p`
  font-size: 18px;
  line-height: 26px;
  padding: 8px 0;
`;
// export const Description = styled.p``;

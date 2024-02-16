import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const Overlay = styled(NavLink)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 348px;
  object-fit: cover;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Messaging = styled.p`
  color: var(--accent);
  font-size: 15px;
  line-height: 28px;
  font-weight: 500;
`;
export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;
export const Title = styled.h5`
  font-size: 15px;
  line-height: 24px;
  color: var(--gray-200);
  font-weight: 500;
`;
export const Subtitle = styled.h6`
  color: var(--gray-300);
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
`;
export const Count = styled.span`
  color: var(--gray-300);
  font-size: 15px;
  line-height: 24px;
  padding-bottom: 10px;
`;
export const Price = styled.span`
  color: var(--gray-100);
  font-weight: 500;
  font-size: 15px;
  line-height: 28px;
`;

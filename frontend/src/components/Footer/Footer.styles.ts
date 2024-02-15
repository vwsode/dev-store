import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Footer = styled.footer`
  padding: 40px 0;
  background: var(--gray-100);
  margin-top: auto;
`;

export const Wrapper = styled.div`
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Columns = styled.div`
  display: flex;
  gap: 12px;
`;
export const Column = styled.div`
  min-width: 240px;
`;
export const ColumnTitle = styled.h6`
  font-size: 12px;
  color: var(--gray-900);
  margin-bottom: 12px;
  font-weight: 400;
  text-transform: uppercase;
`;
export const ColumnNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const ColumnNavLink = styled(NavLink)`
  font-size: 12px;
  color: var(--gray-400);
  text-decoration: none;
  width: max-content;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const SocialLink = styled.a`
  svg path {
    transition: fill 100ms;
  }
  
  &:hover {
    svg path {
      fill: var(--gray-500);
    }
  }
`;

export const Policy = styled.p`
  font-size: 12px;
  color: var(--gray-300);
`;

export const Bottom = styled.div`
  padding: 40px 0 0 0;
  display: flex;
  justify-content: space-between;
`;
export const BottomLinks = styled.div`
  display: flex;
  gap: 12px;
`;
export const BottomLink = styled.a`
  font-size: 12px;
  color: var(--gray-300);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

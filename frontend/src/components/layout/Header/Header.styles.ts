import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const HeaderTop = styled.div`
  background-color: var(--gray-700);
  padding: 5px 0;
`;
export const HeaderTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTopLogo = styled(NavLink)`


`;
export const HeaderTopNav = styled.nav``;
export const HeaderTopNavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
`;
export const HeaderTopNavItem = styled.li`
  display: flex;
  align-items: center;
`;
export const HeaderTopNavLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-200);
  text-decoration: none;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--gray-100);
      text-decoration: underline;
    }
  }
`;
export const Header = styled.header`
  min-height: 60px;
  position: sticky;
  top: 0;
  background-color: var(--gray-900);
  z-index: 2;
`;
export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
`;
export const HeaderLogo = styled(NavLink)``;
export const Navigation = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavigationList = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  align-items: center;
  height: 100%;
`;
export const NavigationItem = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
`;
export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;

  text-decoration: none;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: var(--gray-200);
  height: 100%;
  border-bottom: 2px solid transparent;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: var(--gray-200);
    }
  }
`;
export const HeaderButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;
export const ActionBtn = styled(NavLink)`
  padding: 6px;
  position: relative;
  text-decoration: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: var(--gray-600);
    }
  }
`;
export const ActionBtnBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;


  position: absolute;
  top: -2px;
  right: -2px;
  background-color: var(--gray-100);
  border-radius: 50%;
  width: 16px;
  height: 16px;
  font-size: 10px;
  color: var(--gray-900);
`;

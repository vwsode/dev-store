import useCart from "../../../hooks/useCart.ts";
import useUser from "../../../hooks/useUser.ts";

import Container from "../../shared/ui/Container/Container.tsx";
import Search from "../../shared/ui/Search/Search.tsx";

import { ROUTES } from "../../../config/routes.ts";

import NikeLogo from "../../../assets/icons/nike-logo.svg?react";
import JordanLogo from "../../../assets/icons/jordan-logo.svg?react";
import CartIcon from "../../../assets/icons/cart.svg?react";
import FavIcon from "../../../assets/icons/favorite.svg?react";

import * as S from "./Header.styles.ts";

const Header = () => {
  const { cart } = useCart();
  const { user } = useUser();

  return (
    <>
      <S.HeaderTop>
        <Container>
          <S.HeaderTopWrapper>
            <S.HeaderTopLogo to={ROUTES.CATALOG}>
              <JordanLogo />
            </S.HeaderTopLogo>
            <S.HeaderTopNav>
              <S.HeaderTopNavList>
                <S.HeaderTopNavItem>
                  <S.HeaderTopNavLink to={ROUTES.CATALOG}>
                    Find a Store
                  </S.HeaderTopNavLink>
                </S.HeaderTopNavItem>
                |
                <S.HeaderTopNavItem>
                  <S.HeaderTopNavLink to={ROUTES.CATALOG}>
                    Help
                  </S.HeaderTopNavLink>
                </S.HeaderTopNavItem>
                |
                {user ? (
                  <>
                    <S.HeaderTopNavItem>
                      <S.HeaderTopNavLink to={ROUTES.PROFILE}>
                        Hi, {user.username}
                      </S.HeaderTopNavLink>
                    </S.HeaderTopNavItem>
                  </>
                ) : (
                  <>
                    <S.HeaderTopNavItem>
                      <S.HeaderTopNavLink to={ROUTES.REGISTER}>
                        Join Us
                      </S.HeaderTopNavLink>
                    </S.HeaderTopNavItem>
                    |
                    <S.HeaderTopNavItem>
                      <S.HeaderTopNavLink to={ROUTES.LOGIN}>
                        Sign In
                      </S.HeaderTopNavLink>
                    </S.HeaderTopNavItem>
                  </>
                )}
              </S.HeaderTopNavList>
            </S.HeaderTopNav>
          </S.HeaderTopWrapper>
        </Container>
      </S.HeaderTop>
      <S.Header>
        <Container>
          <S.HeaderWrapper>
            <S.HeaderLogo to={ROUTES.MAIN}>
              <NikeLogo />
            </S.HeaderLogo>
            <S.Navigation>
              <S.NavigationList>
                <S.NavigationItem>
                  <S.NavigationLink to={ROUTES.CATALOG}>
                    New & Featured
                  </S.NavigationLink>
                </S.NavigationItem>
                <S.NavigationItem>
                  <S.NavigationLink to={ROUTES.CATALOG}>Men</S.NavigationLink>
                </S.NavigationItem>
                <S.NavigationItem>
                  <S.NavigationLink to={ROUTES.CATALOG}>Women</S.NavigationLink>
                </S.NavigationItem>
                <S.NavigationItem>
                  <S.NavigationLink to={ROUTES.CATALOG}>Kids</S.NavigationLink>
                </S.NavigationItem>
                <S.NavigationItem>
                  <S.NavigationLink to={ROUTES.CATALOG}>Sale</S.NavigationLink>
                </S.NavigationItem>
                <S.NavigationItem>
                  <S.NavigationLink to={ROUTES.CATALOG}>
                    SNKERS
                  </S.NavigationLink>
                </S.NavigationItem>
              </S.NavigationList>
            </S.Navigation>
            <S.HeaderButtons>
              <Search placeholder="Search" />
              <S.ActionBtn to={ROUTES.FAVORITES}>
                <FavIcon />
              </S.ActionBtn>
              <S.ActionBtn to={ROUTES.CART}>
                <CartIcon />
                {cart.length ? (
                  <S.ActionBtnBadge>{cart.length}</S.ActionBtnBadge>
                ) : (
                  ""
                )}
              </S.ActionBtn>
            </S.HeaderButtons>
          </S.HeaderWrapper>
        </Container>
      </S.Header>
    </>
  );
};

export default Header;

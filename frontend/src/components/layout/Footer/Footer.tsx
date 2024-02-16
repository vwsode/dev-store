import Container from "../../shared/ui/Container/Container.tsx";

import { ROUTES } from "../../../config/routes.ts";

import * as S from "./Footer.styles.ts";

import Facebook from "../../../assets/icons/facebook.svg?react";
import Instagram from "../../../assets/icons/instagram.svg?react";
import Twitter from "../../../assets/icons/twitter.svg?react";
import YouTube from "../../../assets/icons/youtube.svg?react";

const Footer = () => {
  return (
    <S.Footer>
      <Container size="md">
        <S.Wrapper>
          <S.Content>
            <S.Columns>
              <S.Column>
                <S.ColumnTitle>Get Help</S.ColumnTitle>
                <S.ColumnNav>
                  <S.ColumnNavLink to={ROUTES.CATALOG}>
                    Order Status
                  </S.ColumnNavLink>
                  <S.ColumnNavLink to={ROUTES.CATALOG}>
                    Delivery
                  </S.ColumnNavLink>
                  <S.ColumnNavLink to={ROUTES.CATALOG}>Returns</S.ColumnNavLink>
                  <S.ColumnNavLink to={ROUTES.CATALOG}>
                    Payment Options
                  </S.ColumnNavLink>
                  <S.ColumnNavLink to={ROUTES.CATALOG}>
                    Contact Us On Nike.com Inquiries
                  </S.ColumnNavLink>
                  <S.ColumnNavLink to={ROUTES.CATALOG}>
                    Contact Us On All Other Inquiries
                  </S.ColumnNavLink>
                </S.ColumnNav>
              </S.Column>
              <S.Column>
                <S.ColumnTitle>About Nike</S.ColumnTitle>
                <S.ColumnNav>
                  <S.ColumnNavLink to={ROUTES.CATALOG}>News</S.ColumnNavLink>
                  <S.ColumnNavLink to={ROUTES.CATALOG}>Careers</S.ColumnNavLink>
                  <S.ColumnNavLink to={ROUTES.CATALOG}>
                    Investors
                  </S.ColumnNavLink>
                  <S.ColumnNavLink to={ROUTES.CATALOG}>
                    Sustainability
                  </S.ColumnNavLink>
                </S.ColumnNav>
              </S.Column>
            </S.Columns>
            <S.Socials>
              <S.SocialLink href="https://facebook.com" target="_blank">
                <Facebook />
              </S.SocialLink>
              <S.SocialLink href="https://instagram.com" target="_blank">
                <Instagram />
              </S.SocialLink>
              <S.SocialLink href="https://twitter.com" target="_blank">
                <Twitter />
              </S.SocialLink>
              <S.SocialLink href="https://youTube.com" target="_blank">
                <YouTube />
              </S.SocialLink>
            </S.Socials>
          </S.Content>
          <S.Bottom>
            <S.Policy>© 2023 Nike, Inc. All Rights Reserved</S.Policy>
            <S.BottomLinks>
              <S.BottomLink href="#">Guides</S.BottomLink>
              <S.BottomLink href="#">Terms of Sale</S.BottomLink>
              <S.BottomLink href="#">Terms of Use</S.BottomLink>
              <S.BottomLink href="#">Nike Privacy Policy</S.BottomLink>
            </S.BottomLinks>
          </S.Bottom>
        </S.Wrapper>
      </Container>
    </S.Footer>
  );
};

export default Footer;

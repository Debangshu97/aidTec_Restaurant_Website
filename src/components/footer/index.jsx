import React from 'react';
import {
  Styledfooter,
  LogoImg,
  FooterSocials,
  StyledFacebook,
  StyledTwitter,
  StyledInstagram,
  StyledYoutube,
  StyledTelegram,
  StyledP,
  StyledRight,
  Styledinfo,
  StyledSpan,
  ColorLogo,
} from './styles/index';
import Logo from '../../images/logo.svg';

const Footer = () => { 
  return (
    <Styledfooter>
      <FooterSocials>
        <StyledFacebook />
        <StyledTwitter />
        <StyledInstagram />
        <StyledYoutube />
        <StyledTelegram />
      </FooterSocials>
      {/* <LogoImg src={Logo} alt='' /> */}
      <StyledRight>
        <Styledinfo>
          <StyledSpan>Restaurant HungerNation</StyledSpan>
          <StyledSpan>3rd Street Dallas Lane</StyledSpan>
          <StyledSpan>+91 1234567891</StyledSpan>
        </Styledinfo>
        <StyledP>
          All rights reserved 2023 © - Hunger
          <ColorLogo>Nation</ColorLogo>
        </StyledP>
      </StyledRight>
    </Styledfooter>
  );
};

export default Footer;

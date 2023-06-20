import { React } from 'react';
import './styles/style.css';
import {
  StyledImgHero,
  SectionHero,
  HeroWrapper,
  H1Hero,
  H3SubTitle,
  SpanHero,
} from './styles/index';

const Hero = () => {
  return (
    <SectionHero className='hero-container'>
      <div className='styledBg'></div>
      <HeroWrapper>
        <H1Hero>
          Welcome to <SpanHero>Hunger</SpanHero>Nation!
        </H1Hero>

        <H3SubTitle>The Most Frequently Chosen Restaurant 😋😀
</H3SubTitle>
      </HeroWrapper>
    </SectionHero>
  );
};

export default Hero;

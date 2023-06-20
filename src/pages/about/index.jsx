import React from 'react';
import {
  AboutHero,
  WrapperHero,
  ContainerHero,
  StyledH1,
  MainContent,
  TeamWrapper,
  StyledP,
} from './styles/index';
import Team from '../../components/Team/index';
import TeamDesc from './../../components/TeamDesc/index';
import FeaturesTeam from './../../components/featuresTeam/index';

function About() {
  return (
    <section>
      <AboutHero className='hero'>
        <ContainerHero>
          <WrapperHero>
            <StyledH1>Our Team</StyledH1>
            <StyledP>
This is how our team looks like, people who are ready to provide our guests with a unique culinary experience.

            </StyledP>
          </WrapperHero>
        </ContainerHero>
      </AboutHero>
      <MainContent>
        <Team />
        <TeamDesc />
        <FeaturesTeam />
      </MainContent>
    </section>
  );
}

export default About;

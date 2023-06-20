import React from 'react';
import {
  TeamContainer,
  HeadingTeam,
  StyledH1,
  OurTeamWrapper,
  TeamWrapper,
  TeamSection,
} from './styles/index';
import TeamMemberCard from './TeamMemberCard ';

const Team = () => {
  return (
    <TeamSection>
      <TeamContainer>
        <TeamWrapper>
          <HeadingTeam>
            <StyledH1>Our Team</StyledH1>
            <p>
             This is how our team looks like, people who are ready to provide our guests with a unique culinary experience.





            </p>
          </HeadingTeam>
          <OurTeamWrapper>
            <TeamMemberCard />
          </OurTeamWrapper>
        </TeamWrapper>
      </TeamContainer>
    </TeamSection>
  );
};

export default Team;

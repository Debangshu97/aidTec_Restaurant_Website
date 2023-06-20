import React from 'react';
import {
  DescTeamSection,
  DescTeamwrapper,
  StyledH2,
  ImageDesc,
} from './styles/index';

const TeamDesc = () => {
  return (
    <DescTeamSection>
      <DescTeamwrapper>
        <div>
          <StyledH2>Our Specialists</StyledH2>
        </div>
        <p>
          Our team is a group of gastronomy enthusiasts who have been working in the culinary and hotel industry for years. Each of us has the knowledge and experience that allows us to create unique taste experiences for our guests. We focus on the quality and freshness of ingredients, thanks to which our dishes are always aromatic and full of flavor. Our work is based on the passion and satisfaction of our customers, which is why we always try to meet their expectations. Our team creates a friendly atmosphere in our restaurant that makes our guests feel exceptionally welcome and appreciated.
        </p>
      </DescTeamwrapper>
      <ImageDesc />
    </DescTeamSection>
  );
};

export default TeamDesc;

import React from 'react';
import {
  AboutSection,
  RestaurantWrapper,
  AboutInfo,
  H1About,
  StyledImgAbout,
  StyledImageBox,
  Description,
  LineDescription,
  ReviewWrapper,
  ImgRestaurant,
  ButtonAbout,
} from './styles/index';

import restaurant from '../../images/restaurant.jpg';
import Reviews from './reviews';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <AboutSection>
      <RestaurantWrapper>
        <AboutInfo>
          <H1About>About The Restaurant</H1About>
          <Description>
            We are a restaurant operating for five years, which from the very beginning has focused on quality and customer satisfaction. Our cuisine is based on fresh ingredients and original recipes, which guarantees the unique taste of each dish. The experience gained over the years of work allows us to constantly improve the quality of our services and introduce new, interesting flavors. We invite you to visit our restaurant and enjoy our dishes, which will surely stay in your memory for a long time.
          </Description>
          <Link to='/AboutUs'>
            <ButtonAbout>See more!</ButtonAbout>
          </Link>
          <LineDescription>
            <ImgRestaurant src={restaurant} />
          </LineDescription>
        </AboutInfo>
        <ReviewWrapper>
          <Reviews />
        </ReviewWrapper>
      </RestaurantWrapper>
      {/* <StyledImageBox>
          <StyledImgAbout src={about} />
          <StyledImgAbout src={aboutS} />
        </StyledImageBox> */}
    </AboutSection>
  );
};

export default AboutUs;

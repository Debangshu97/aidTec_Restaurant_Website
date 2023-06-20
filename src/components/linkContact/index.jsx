import React from 'react';
import { ContactButton, LinkSection } from './styles/index';
import { Link } from 'react-router-dom';

const LinkCantact = () => {
  return (
    <LinkSection>
      <h2>Have A Question?</h2>
      <p>
write us a message in contact, we will be happy to give you an answer

      </p>
      <Link to='/contact'>
        <ContactButton>Contact Us</ContactButton>
      </Link>
    </LinkSection>
  );
};

export default LinkCantact;

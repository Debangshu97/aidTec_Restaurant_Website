import React from 'react';
import QuickContact from '../../components/quickContact';
import {
  ContactHero,
  InfoHero,
  ContentHero,
  StyledH1,
  Contactsection,
} from './styles/index';
import ContactForm from '../../components/ContactForm/index';

function Contact() {
  return (
    <main>
      <ContactHero>
        <InfoHero>
          <ContentHero>
            <StyledH1>Contact Us</StyledH1>
            <p>
             write us a message in contact, we will be happy to give you an answer


            </p>
          </ContentHero>
        </InfoHero>
      </ContactHero>
      <QuickContact />
      <Contactsection>
        <ContactForm />
      </Contactsection>
    </main>
  );
}

export default Contact;

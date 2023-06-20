import { React, useState } from 'react';
import { AccordionSection, InfoSection } from './styles/index';
import './styles/style.css';
import DataQuestion from './dataQuestions';
import SingleQuestion from './Question';

const Accordion = () => {
  const [questions, setQuestions] = useState(DataQuestion);
  return (
    <AccordionSection>
      <div className='container'>
        <h3>Frequently Asked Questions</h3>
        <InfoSection>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </InfoSection>
      </div>
    </AccordionSection>
  );
};

export default Accordion;
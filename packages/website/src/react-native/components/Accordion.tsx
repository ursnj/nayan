import React from 'react';
import { NAccordion, AccordionTypes } from '@nayan-ui/react';
import ComponentWrapper from '../../helpers/ComponentWrapper';

const items = [
  { title: 'Heading 1', message: 'Description 1' },
  { title: 'Heading 2', message: 'Description 2' }
];

const Accordion = () => {
  return (
    <ComponentWrapper>
      <h1 className="text-text mb-3 text-lg">Single:</h1>
      <NAccordion type={AccordionTypes.SINGLE} items={items} />
      <h1 className="text-text mb-3 mt-5 text-lg">Multiple:</h1>
      <NAccordion type={AccordionTypes.MULTIPLE} items={items} />
    </ComponentWrapper>
  );
};

export default Accordion;

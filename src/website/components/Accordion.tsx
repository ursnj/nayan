import { NAccordion } from '@/components/NAccordion';
import { AccordionTypes } from '@/components/Types';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { accordionCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { accordionAttributes } from '@/website/services/Attributes';

const items = [
  { title: 'Heading 1', message: 'Description 1' },
  { title: 'Heading 2', message: 'Description 2' }
];

const Accordion = () => {
  return (
    <Sidebar title="Accordion">
      <div className="mb-5">A vertically stacked set of interactive headings that each reveal a section of content.</div>

      <SubHeader title="Demo">
        <h1 className="text-text mb-3 text-lg">Single:</h1>
        <NAccordion type={AccordionTypes.SINGLE} items={items} />
        <h1 className="text-text mb-3 mt-5 text-lg">Multiple:</h1>
        <NAccordion type={AccordionTypes.MULTIPLE} items={items} />
      </SubHeader>

      <SubHeader title="Usage">
        <Code code={accordionCode} />
      </SubHeader>

      <Attributes data={accordionAttributes} />
    </Sidebar>
  );
};

export default Accordion;

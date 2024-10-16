import { NAccordion } from '@/components/NAccordion';
import { AccordionTypes } from '@/components/Types';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { accordionCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { accordionAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

const items = [
  { title: 'Heading 1', message: 'Description 1' },
  { title: 'Heading 2', message: 'Description 2' }
];

const Accordion = () => {
  return (
    <Sidebar title="Accordion">
      <Meta title="Accordion" />
      <div className="mb-5">
        An Accordion component is a UI element that allows users to expand and collapse sections of content. It is commonly used to organize
        information in a compact and accessible manner, displaying only the headers by default and revealing the associated content when clicked. This
        helps improve the readability of complex or lengthy information by reducing clutter on the page.
      </div>

      <SubHeader title="Demo">
        <h1 className="text-text mb-3 text-lg">Single:</h1>
        <NAccordion type={AccordionTypes.SINGLE} items={items} />
        <h1 className="text-text mb-3 mt-5 text-lg">Multiple:</h1>
        <NAccordion type={AccordionTypes.MULTIPLE} items={items} />
      </SubHeader>

      <Attributes data={accordionAttributes} />

      <SubHeader title="Usage">
        <Code code={accordionCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Accordion;

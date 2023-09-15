import { NAccordion } from '@/components/NAccordion';
import { AccordionTypes } from '@/components/Types';
import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { accordionCode } from '../services/CodeBlocks';

const Accordion = () => {
  const list = [
    { title: 'Heading 1', message: 'Description 1' },
    { title: 'Heading 2', message: 'Description 2' }
  ];
  return (
    <Sidebar>
      <div className="text-2xl mb-5">Accordion</div>
      <div className="mb-5">A vertically stacked set of interactive headings that each reveal a section of content.</div>
      <div className="text-xl mb-5">Usage</div>
      <Code code={accordionCode} />
      <div className="text-xl mb-5">Demo</div>
      <h1 className="text-text mb-3 text-lg">Single:</h1>
      <NAccordion type={AccordionTypes.SINGLE} list={list} />
      <h1 className="text-text mb-3 mt-5 text-lg">Multiple:</h1>
      <NAccordion type={AccordionTypes.MULTIPLE} list={list} />
    </Sidebar>
  );
};

export default Accordion;

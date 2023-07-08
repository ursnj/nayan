import { NAccordion } from '@/components/NAccordion';

const AccordionExample = () => {
  const list = [
    { title: 'Heading 1', message: 'Description 1' },
    { title: 'Heading 2', message: 'Description 2' },
    { title: 'Heading 3', message: 'Description 3' }
  ];
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="nyn-text mb-3 text-lg">Single Accordion:</h1>
      <NAccordion list={list} />
      <h1 className="nyn-text mb-3 mt-5 text-lg">Multiple Accordion:</h1>
      <NAccordion type="multiple" list={list} />
    </div>
  );
};

export default AccordionExample;

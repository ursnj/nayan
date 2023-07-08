import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Props {
  className?: string;
  type?: 'single' | 'multiple';
  list: { title: string; message: string }[];
}

export const NAccordion = (props: Props) => {
  const { type = 'single', list, className = '' } = props;

  return (
    <Accordion type={type} collapsible className="w-full">
      {list.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className={`nyn-accordion border-0 nyn-border-bottom ${className}`}>
          <AccordionTrigger className="nyn-accordion-title nyn-text hover:no-underline">{item.title}</AccordionTrigger>
          <AccordionContent className="nyn-accordion-message nyn-text">{item.message}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

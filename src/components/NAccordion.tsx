import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AccordionTypes } from '@/components/Types';

interface Props {
  className?: string;
  type?: AccordionTypes;
  list: { title: string; message: string }[];
}

export const NAccordion = (props: Props) => {
  const { type = AccordionTypes.SINGLE, list, className = '' } = props;

  return (
    <Accordion type={type} collapsible={true} className="w-full">
      {list.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className={`nyn-accordion border-0 border-b border-border ${className}`}>
          <AccordionTrigger className="nyn-accordion-title text-text hover:no-underline">{item.title}</AccordionTrigger>
          <AccordionContent className="nyn-accordion-message text-text">{item.message}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

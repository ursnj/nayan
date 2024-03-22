import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AccordionListItem, AccordionTypes } from '@/components/Types';
import './NStyles.css';

interface Props {
  className?: string;
  type?: AccordionTypes;
  items: AccordionListItem[];
}

export const NAccordion = (props: Props) => {
  const { type = AccordionTypes.SINGLE, items, className = '' } = props;

  return (
    <Accordion type={type} className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className={`nyn-accordion border-0 border-b border-border ${className}`}>
          <AccordionTrigger className="nyn-accordion-title text-text hover:no-underline">{item.title}</AccordionTrigger>
          <AccordionContent className="nyn-accordion-message text-text">{item.message}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

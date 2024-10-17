import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AccordionListItem, AccordionTypes } from '@/components/Types';
import { cn } from '@/lib/utils';
import './NStyles.css';

interface Props {
  className?: string;
  itemClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
  type?: AccordionTypes;
  items: AccordionListItem[];
}

export const NAccordion = (props: Props) => {
  const { type = AccordionTypes.SINGLE, items, className = '', itemClassName = '', triggerClassName = '', contentClassName = '' } = props;

  return (
    <Accordion type={type} className={cn(`w-full ${className}`)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className={cn(`nyn-accordion border border-border px-3 bg-card rounded mb-2.5 ${itemClassName}`)}>
          <AccordionTrigger className={cn(`nyn-accordion-title text-text hover:no-underline ${triggerClassName}`)}>{item.title}</AccordionTrigger>
          <AccordionContent className={cn(`nyn-accordion-message text-text ${contentClassName}`)}>{item.message}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

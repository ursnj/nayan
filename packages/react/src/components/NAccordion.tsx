import React, { memo } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { AccordionListItem, AccordionTypes } from './Types';
import { cn } from '../lib/utils';

export interface NAccordionProps<T = AccordionListItem> {
  className?: string;
  itemClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
  type?: AccordionTypes;
  items: T[];
  keyExtractor?: (item: T, index: number) => string | number;
  renderTrigger?: (item: T, index: number) => React.ReactNode;
  renderContent?: (item: T, index: number) => React.ReactNode;
}

function NAccordionComponent<T = AccordionListItem>({
  type = AccordionTypes.SINGLE,
  items,
  className = '',
  itemClassName = '',
  triggerClassName = '',
  contentClassName = '',
  keyExtractor,
  renderTrigger,
  renderContent
}: NAccordionProps<T>) {
  return (
    <Accordion type={type} className={cn('w-full', className)}>
      {items.map((item, index) => {
        const key = keyExtractor ? keyExtractor(item, index) : ((item as any).id ?? index);
        return (
          <AccordionItem
            key={key}
            value={`item-${key}`}
            className={cn('nyn-accordion border border-border px-3 bg-card rounded mb-2.5', itemClassName)}>
            <AccordionTrigger className={cn('nyn-accordion-title text-text hover:no-underline', triggerClassName)}>
              {renderTrigger ? renderTrigger(item, index) : (item as any).title}
            </AccordionTrigger>
            <AccordionContent className={cn('nyn-accordion-message text-text', contentClassName)}>
              {renderContent ? renderContent(item, index) : (item as any).message}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export const NAccordion = memo(NAccordionComponent) as typeof NAccordionComponent;

import React, { useMemo } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { NText } from '@/components/NText';
import { cn } from '@/lib/utils';

export interface AccordionItemData {
  id?: string;
  title: string;
  description: string;
  disabled?: boolean;
}

export interface NAccordionProps {
  items: AccordionItemData[];
  multiple?: boolean;
  collapsible?: boolean;
  defaultValue?: string[];
  className?: string;
  itemClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const NAccordion = React.memo<NAccordionProps>(
  ({ items, multiple = true, collapsible = true, defaultValue, className, itemClassName, titleClassName, descriptionClassName }) => {
    const processedItems = useMemo(
      () =>
        items.map((item, index) => ({
          ...item,
          id: item.id || `accordion-item-${index}`
        })),
      [items]
    );

    const accordionDefaultValue = useMemo(() => {
      if (defaultValue) return defaultValue;
      return multiple ? ['accordion-item-0'] : undefined;
    }, [defaultValue, multiple]);

    const renderAccordionItems = () => (
      <>
        {processedItems.map(item => (
          <AccordionItem key={item.id} value={item.id} disabled={item.disabled} className={itemClassName}>
            <AccordionTrigger className="px-4 py-3">
              <NText className={cn('text-lg font-medium', titleClassName)}>{item.title}</NText>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-3">
              <NText className={cn('text-muted-foreground', descriptionClassName)}>{item.description}</NText>
            </AccordionContent>
          </AccordionItem>
        ))}
      </>
    );

    // Use conditional rendering to handle different accordion types
    if (multiple) {
      return (
        <Accordion type="multiple" collapsible={collapsible} defaultValue={accordionDefaultValue} className={cn('w-full', className)}>
          {renderAccordionItems()}
        </Accordion>
      );
    }

    // For single mode, convert array defaultValue to single string
    const singleDefaultValue = accordionDefaultValue?.[0];

    return (
      <Accordion type="single" collapsible={collapsible} defaultValue={singleDefaultValue} className={cn('w-full', className)}>
        {renderAccordionItems()}
      </Accordion>
    );
  }
);

NAccordion.displayName = 'NAccordion';

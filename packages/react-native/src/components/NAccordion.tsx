import React, { useMemo } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { NText } from '@/components/NText';
import { cn } from '@/lib/utils';
import * as AccordionPrimitive from '@rn-primitives/accordion';

// Enhanced type definitions
export interface AccordionItemData {
  /** Unique identifier for the accordion item */
  id?: string;
  /** Title text displayed in the trigger */
  title: string;
  /** Content displayed when expanded */
  content: React.ReactNode;
  /** Optional custom className for this specific item */
  className?: string;
  /** Whether this item is disabled */
  disabled?: boolean;
}

export interface NAccordionProps extends Omit<AccordionPrimitive.RootProps, 'children'> {
  /** Array of accordion items to display */
  items: AccordionItemData[];
  /** Custom className for the root accordion container */
  className?: string;
  /** Custom className applied to all accordion items */
  itemClassName?: string;
  /** Custom className applied to all trigger containers */
  triggerClassName?: string;
  /** Custom className applied to all trigger text */
  titleClassName?: string;
  /** Custom className applied to all content containers */
  contentClassName?: string;
  /** Whether to allow multiple items to be open simultaneously */
  multiple?: boolean;
  /** Whether items can be collapsed after being opened */
  collapsible?: boolean;
  /** Default open items (by id or index) */
  defaultValue?: string[];
  /** Controlled open items (by id or index) */
  value?: string[];
  /** Callback when accordion state changes */
  onValueChange?: (value: string[]) => void;
  /** Custom render function for accordion trigger content */
  renderTrigger?: (item: AccordionItemData, index: number) => React.ReactNode;
  /** Custom render function for accordion content */
  renderContent?: (item: AccordionItemData, index: number) => React.ReactNode;
}

/**
 * NAccordion - A flexible and performant accordion component
 *
 * Features:
 * - TypeScript support with proper type definitions
 * - Performance optimized with React.memo and useMemo
 * - Flexible rendering with custom render functions
 * - Support for controlled and uncontrolled modes
 * - Accessibility compliant
 * - Customizable styling at multiple levels
 */
export const NAccordion = React.memo<NAccordionProps>(
  ({
    items,
    className,
    itemClassName,
    triggerClassName,
    titleClassName,
    contentClassName,
    multiple = false,
    collapsible = true,
    defaultValue,
    value,
    onValueChange,
    renderTrigger,
    renderContent,
    ...accordionProps
  }) => {
    // Filter out props that conflict with our type-specific props
    const { type: _, ...filteredAccordionProps } = accordionProps as any;

    // Memoize processed items to avoid recalculation on every render
    const processedItems = useMemo(
      () =>
        items.map((item, index) => ({
          ...item,
          // Generate consistent IDs if not provided
          id: item.id || `accordion-item-${index}`,
          index
        })),
      [items]
    );

    // Default trigger renderer
    const defaultTriggerRenderer = useMemo(
      () => (item: AccordionItemData) => <NText className={cn('text-lg font-medium', titleClassName)}>{item.title}</NText>,
      [titleClassName]
    );

    // Default content renderer
    const defaultContentRenderer = useMemo(
      () => (item: AccordionItemData) => {
        if (typeof item.content === 'string') {
          return <NText className={contentClassName}>{item.content}</NText>;
        }
        return item.content;
      },
      [contentClassName]
    );

    const triggerRenderer = renderTrigger || defaultTriggerRenderer;
    const contentRenderer = renderContent || defaultContentRenderer;

    return (
      <>
        {multiple ? (
          <Accordion
            type="multiple"
            defaultValue={defaultValue || []}
            value={value}
            onValueChange={onValueChange}
            {...filteredAccordionProps}
            className={cn('w-full', className)}>
            {processedItems.map(item => (
              <AccordionItem key={item.id} value={item.id} disabled={item.disabled} className={cn(itemClassName, item.className)}>
                <AccordionTrigger className={cn('px-4 py-3', triggerClassName)}>
                  {triggerRenderer(item, processedItems.indexOf(item))}
                </AccordionTrigger>
                <AccordionContent className={cn('px-4 pb-3', contentClassName)}>
                  {contentRenderer(item, processedItems.indexOf(item))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <Accordion
            type="single"
            collapsible={collapsible}
            defaultValue={defaultValue?.[0]}
            value={value?.[0]}
            onValueChange={(val: string | undefined) => {
              onValueChange?.(val ? [val] : []);
            }}
            {...filteredAccordionProps}
            className={cn('w-full', className)}>
            {processedItems.map(item => (
              <AccordionItem key={item.id} value={item.id} disabled={item.disabled} className={cn(itemClassName, item.className)}>
                <AccordionTrigger className={cn('px-4 py-3', triggerClassName)}>
                  {triggerRenderer(item, processedItems.indexOf(item))}
                </AccordionTrigger>
                <AccordionContent className={cn('px-4 pb-3', contentClassName)}>
                  {contentRenderer(item, processedItems.indexOf(item))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </>
    );
  }
);

NAccordion.displayName = 'NAccordion';

// Export types for external use
export type { AccordionItemData as NAccordionItem };

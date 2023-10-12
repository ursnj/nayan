export const accordionAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'type', type: 'AccordionTypes', default: 'AccordionTypes.SINGLE', details: 'You can pass what type of accordion you want to render.' },
  { name: 'items', type: 'AccordionListItem[]', default: '[ ]', details: 'You can pass list of accordion items.' }
];

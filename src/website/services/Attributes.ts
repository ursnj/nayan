export const accordionAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'type', type: 'AccordionTypes', default: 'AccordionTypes.SINGLE', details: 'You can pass what type of accordion you want to render.' },
  { name: 'items', type: 'AccordionListItem[]', default: '[ ]', details: 'You can pass list of accordion items.' }
];

export const alertAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'type', type: 'AlertTypes', default: 'AlertTypes.DEFAULT', details: 'You can pass what type of alert you want to render.' },
  { name: 'title', type: 'string', default: 'Renders based on the type you passed.', details: 'You can pass alert title.' },
  { name: 'message', type: 'string', default: 'Required', details: 'You can pass alert message.' },
  { name: 'onCLode', type: '() => void', default: 'Required', details: 'You can get callback when alert got closed.' }
];

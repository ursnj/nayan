export const accordionAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'type', type: 'AccordionTypes', default: 'AccordionTypes.SINGLE', details: 'You can pass type of the accordion.' },
  { name: 'items', type: 'AccordionListItem[]', default: 'Required', details: 'You can pass list of accordion items.' }
];

export const alertAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'type', type: 'AlertTypes', default: 'AlertTypes.DEFAULT', details: 'You can pass type of the alert.' },
  { name: 'title', type: 'string', default: 'Renders based on the type you passed.', details: 'You can pass alert title.' },
  { name: 'message', type: 'string', default: 'Required', details: 'You can pass alert message.' },
  { name: 'onClose', type: '() => void', default: 'Required', details: 'You can get callback when alert got closed.' }
];

export const badgeAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'size', type: 'BadgeSize', default: 'BadgeSize.SM', details: 'You can pass size of the badge.' },
  { name: 'children', type: 'string | ReactNode', default: 'Required', details: 'You can pass badge content as children.' }
];

export const buttonAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'isOutline', type: 'boolean', default: 'false', details: 'You can pass this to create outline button.' },
  { name: 'isLoading', type: 'boolean', default: 'false', details: 'You can pass this to show loading indication.' },
  { name: 'loadingText', type: 'string', default: "' '", details: 'You can pass this to show customised loading text.' },
  { name: 'size', type: 'ButtonSize', default: 'ButtonSize.MD', details: 'You can pass size of the button.' },
  { name: 'children', type: 'string | ReactNode', default: 'Required', details: 'You can pass button content as children.' },
  { name: 'onClick', type: '(e: any) => void', default: 'Required', details: 'You can get callback when button clicked.' }
];

export const buttonGroupAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'items', type: 'string[]', default: 'Required', details: 'You can pass items for the button group.' },
  { name: 'selected', type: 'string', default: 'Required', details: 'You can pass default selected item.' },
  { name: 'onChange', type: '(selected: string) => void', default: 'Required', details: 'You can get callback when button group changed.' }
];

export const cardAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'children', type: 'string | ReactNode', default: 'Required', details: 'You can pass card content as children.' }
];

export const checkboxAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'id', type: 'string', default: 'check', details: 'You can pass id to create unique identifier.' },
  { name: 'checked', type: 'boolean', default: 'Required', details: 'You can pass checked to set default checkbox state.' },
  { name: 'disabled', type: 'boolean', default: 'false', details: 'You can pass disabled to set default checkbox state.' },
  { name: 'children', type: 'string | ReactNode', default: 'Required', details: 'You can pass checkbox content as children.' },
  { name: 'onChange', type: '(checked: boolean) => void', default: 'Required', details: 'You can get callback when checkbox state changed.' }
];

export const comboAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'label', type: 'string', default: "' '", details: 'You can pass label to show label for combobox.' },
  { name: 'isOpen', type: 'boolean', default: 'false', details: 'You can pass isOpen to show / hide combobox.' },
  { name: 'items', type: 'ComboBoxItem[]', default: 'Required', details: 'You can pass items for the combobox options.' },
  { name: 'placeholder', type: 'string', default: 'Required', details: 'You can pass placeholder to show while searching.' },
  { name: 'selected', type: 'string', default: 'Required', details: 'You can pass default selected item.' },
  { name: 'onChange', type: '(selected: string) => void', default: 'Required', details: 'You can get callback when button group changed.' }
];

export const confirmAlertAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'title', type: 'string', default: 'Are you absolutely sure?', details: 'You can pass title for confirm alert.' },
  { name: 'message', type: 'string', default: 'Required', details: 'You can pass message for confirm alert.' },
  { name: 'confirmText', type: 'string', default: 'Confirm', details: 'You can pass confirmText for confirm alert.' },
  { name: 'cancelText', type: 'string', default: 'Cancel', details: 'You can pass cancelText for confirm alert.' },
  { name: 'isOpen', type: 'boolean', default: 'false', details: 'You can pass isOpen to show / hide alert box.' },
  { name: 'onClose', type: '() => void', default: 'Required', details: 'You can get callback when confirm alert got closed.' },
  { name: 'onResult', type: '(result: boolean) => void', default: 'Required', details: 'You can get callback when alert confirmed / cancelled.' }
];

export const dialogAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'title', type: 'string', default: 'Required', details: 'You can pass title for dialog.' },
  { name: 'size', type: 'DialogSize', default: 'DialogSize.MD', details: 'You can pass size of the dialog.' },
  { name: 'isOpen', type: 'boolean', default: 'false', details: 'You can pass isOpen to show / hide alert box.' },
  { name: 'children', type: 'string | ReactNode', default: 'Required', details: 'You can pass dialog content as children.' },
  { name: 'onClose', type: '() => void', default: 'Required', details: 'You can get callback when dialog got closed.' }
];

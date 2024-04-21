export const accordionAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'itemClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'triggerClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'contentClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'type', type: 'AccordionTypes', default: 'AccordionTypes.SINGLE', details: 'You can pass type of the accordion.' },
  { name: 'items', type: 'AccordionListItem[]', default: 'Required', details: 'You can pass list of accordion items.' }
];

export const alertAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'titleClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'closeClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'messageClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
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
  { name: 'buttonClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'items', type: 'string[]', default: 'Required', details: 'You can pass items for the button group.' },
  { name: 'selected', type: 'string', default: 'Required', details: 'You can pass default selected item.' },
  { name: 'onChange', type: '(selected: string) => void', default: 'Required', details: 'You can get callback when button group changed.' }
];

export const cardAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'children', type: 'string | ReactNode', default: 'Required', details: 'You can pass card content as children.' },
  { name: 'onClick', type: '(e: any) => void', default: 'Required', details: 'You can get callback when button clicked.' }
];

export const checkboxAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'labelClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'checkClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'id', type: 'string', default: 'check', details: 'You can pass id to create unique identifier.' },
  { name: 'checked', type: 'boolean', default: 'Required', details: 'You can pass checked to set default checkbox state.' },
  { name: 'disabled', type: 'boolean', default: 'false', details: 'You can pass disabled to set default checkbox state.' },
  { name: 'children', type: 'string | ReactNode', default: 'Required', details: 'You can pass checkbox content as children.' },
  { name: 'onChange', type: '(checked: boolean) => void', default: 'Required', details: 'You can get callback when checkbox state changed.' }
];

export const confirmAlertAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'titleClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'messageClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'confirmClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'cancelClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
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
  { name: 'titleClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'headerClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'contentClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'title', type: 'string', default: 'Required', details: 'You can pass title for dialog.' },
  { name: 'size', type: 'DialogSize', default: 'DialogSize.MD', details: 'You can pass size of the dialog.' },
  { name: 'isOpen', type: 'boolean', default: 'false', details: 'You can pass isOpen to show / hide alert box.' },
  { name: 'children', type: 'string | ReactNode', default: 'Required', details: 'You can pass dialog content as children.' },
  { name: 'onClose', type: '() => void', default: 'Required', details: 'You can get callback when dialog got closed.' }
];

export const dividerAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'orientation', type: 'vertical | horizontal', default: 'horizontal', details: 'You can pass divider orientation.' }
];

export const infiniteScrollAttributes = [
  {
    name: 'next',
    type: 'function',
    default: '',
    details:
      'a function which must be called after reaching the bottom. It must trigger some sort of action which fetches the next data. The data is passed as children to the InfiniteScroll component and the data should contain previous items too. e.g. Initial data = [1, 2, 3] and then next load of data should be [1, 2, 3, 4, 5, 6].'
  },
  {
    name: 'hasMore',
    type: 'boolean',
    default: '',
    details: 'it tells the InfiniteScroll component on whether to call next function on reaching the bottom and shows an endMessage to the user.'
  },
  { name: 'children', type: 'ReactNode[]', default: '', details: 'the data items which you need to scroll.\n' },
  { name: 'dataLength', type: 'number', default: '', details: 'set the length of the data.This will unlock the subsequent calls to next.' },
  {
    name: 'loader',
    type: 'ReactNode',
    default: '',
    details:
      'you can send a loader component to show while the component waits for the next load of data. e.g. <h3>Loading...</h3> or any fancy loader element.'
  },
  {
    name: 'scrollThreshold',
    type: 'number | string',
    default: '',
    details:
      'A threshold value defining when InfiniteScroll will call next. Default value is 0.8. It means the next will be called when user comes below 80% of the total height. If you pass threshold in pixels (scrollThreshold="200px"), next will be called once you scroll at least (100% - scrollThreshold) pixels down.'
  },
  {
    name: 'onScroll',
    type: 'function',
    default: '',
    details:
      'a function that will listen to the scroll event on the scrolling container. Note that the scroll event is throttled, so you may not receive as many events as you would expect.'
  },
  {
    name: 'endMessage',
    type: 'ReactNode',
    default: '',
    details: "this message is shown to the user when he has seen all the records which means he's at the bottom and hasMore is false\n"
  },
  { name: 'className', type: 'string', default: "' '", details: 'add any custom class you want.' },
  { name: 'style', type: 'object', default: '', details: 'any style which you want to override.' },
  { name: 'height', type: 'number', default: '', details: 'optional, give only if you want to have a fixed height scrolling content\n' },
  {
    name: 'scrollableTarget',
    type: 'string | ReactNode',
    default: '',
    details:
      'optional, reference to a (parent) DOM element that is already providing overflow scrollbars to the InfiniteScroll component. You should provide the id of the DOM node preferably.'
  },
  {
    name: 'hasChildren',
    type: 'boolean',
    default: '',
    details:
      "children is by default assumed to be of type array and it's length is used to determine if loader needs to be shown or not, if your children is not an array, specify this prop to tell if your items are 0 or more.\n"
  },
  { name: 'pullDownToRefresh', type: 'boolean', default: '', details: 'to enable Pull Down to Refresh feature\n' },
  {
    name: 'pullDownToRefreshContent',
    type: 'ReactNode',
    default: '',
    details: 'any JSX that you want to show the user, default={<h3>Pull down to refresh</h3>}.'
  },
  {
    name: 'releaseToRefreshContent',
    type: 'ReactNode',
    default: '',
    details: 'any JSX that you want to show the user, default={<h3>Release to refresh</h3>}.'
  },
  {
    name: 'pullDownToRefreshThreshold',
    type: 'number',
    default: '',
    details:
      'minimum distance the user needs to pull down to trigger the refresh, default=100px , a lower value may be needed to trigger the refresh depending your users browser.'
  },
  {
    name: 'refreshFunction',
    type: 'function',
    default: '',
    details: 'this function will be called, it should return the fresh data that you want to show the user.'
  },
  { name: 'initialScrollY', type: 'number', default: '', details: 'set a scroll y position for the component to render with.' },
  { name: 'inverse', type: 'boolean', default: '', details: 'set infinite scroll on top.' }
];

export const inputAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'labelClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'inputClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'id', type: 'string', default: 'input', details: 'You can pass id to create unique identifier.' },
  { name: 'label', type: 'string', default: "' '", details: 'You can pass label of the input.' },
  { name: 'placeholder', type: 'string', default: "' '", details: 'You can pass placeholder of the input.' },
  { name: 'value', type: 'string', default: "' '", details: 'You can pass value of the input.' },
  { name: 'type', type: 'text | email | number | date ..etc', default: 'text', details: 'You can pass type of the input.' },
  { name: 'disabled', type: 'boolean', default: 'false', details: 'You can pass disabled to set default checkbox state.' },
  { name: 'onChange', type: '(value: string | number) => void', default: 'Required', details: 'You can get callback when input value changed.' }
];

export const inputHookAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'labelClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'inputClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'control', type: 'react-hook-form control', default: "' '", details: 'React hook form control.' },
  { name: 'errors', type: 'react-hook-form errors', default: "' '", details: 'React hook form errors.' },
  { name: 'rules', type: 'react-hook-form rules', default: "' '", details: 'React hook form rules.' },
  { name: 'name', type: 'string', default: 'form-input', details: 'You can pass name to name the changed value.' },
  { name: 'id', type: 'string', default: 'input', details: 'You can pass id to create unique identifier.' },
  { name: 'label', type: 'string', default: "' '", details: 'You can pass label of the input.' },
  { name: 'placeholder', type: 'string', default: "' '", details: 'You can pass placeholder of the input.' },
  { name: 'type', type: 'text | email | number | date ..etc', default: 'text', details: 'You can pass type of the input.' },
  { name: 'disabled', type: 'boolean', default: 'false', details: 'You can pass disabled to set default checkbox state.' }
];

export const linkAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'children', type: 'string | ReactNode', default: 'Required', details: 'You can pass link content as children.' },
  { name: 'href', type: 'string', default: "' '", details: 'You can pass href to render anchor element.' },
  { name: 'onClick', type: '() => void', default: '', details: 'You can get callback when link element clicked.' }
];

export const linkifyAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'children', type: 'string | ReactNode', default: 'Required', details: 'You can pass linkify content as children.' }
];

export const loadingAttributes = [{ name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' }];

export const menuAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'titleClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'triggerClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'title', type: 'string', default: "' '", details: 'You can pass title for menu.' },
  { name: 'size', type: 'MenuSize', default: 'MenuSize.MD', details: 'You can pass size of the menu.' },
  { name: 'side', type: 'top | bottom | right | left', default: 'bottom', details: 'You can pass side to menu.' },
  { name: 'align', type: 'start | end | center', default: 'end', details: 'You can pass align to menu.' },
  { name: 'trigger', type: 'string | ReactNode', default: 'Required', details: 'You can pass trigger to menu.' },
  { name: 'children', type: 'string | ReactNode', default: 'Required', details: 'You can pass menu content as children.' }
];

export const menuItemAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'iconClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'titleClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'shortcutClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'title', type: 'string', default: 'Required', details: 'You can pass title for menu item.' },
  { name: 'shortcut', type: 'string', default: "' '", details: 'You can pass shortcut key for menu item.' },
  { name: 'icon', type: 'ReactNode', default: 'Required', details: 'You can pass icon for menu item.' },
  { name: 'separator', type: 'boolean', default: 'false', details: 'You can pass separator for menu item.' },
  { name: 'onClick', type: '() => void', default: '', details: 'You can get callback when menu item clicked.' }
];

export const menuNestedAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'triggerClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'size', type: 'MenuSize', default: 'MenuSize.MD', details: 'You can pass size of the menu.' },
  { name: 'trigger', type: 'string | ReactNode', default: 'Required', details: 'You can pass trigger to menu.' },
  { name: 'children', type: 'string | ReactNode', default: 'Required', details: 'You can pass menu content as children.' }
];

export const popoverAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'triggerClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'size', type: 'PopoverSize', default: 'PopoverSize.MD', details: 'You can pass size of the popover.' },
  { name: 'side', type: 'top | bottom | right | left', default: 'bottom', details: 'You can pass side to popover.' },
  { name: 'align', type: 'start | end | center', default: 'end', details: 'You can pass align to popover.' },
  { name: 'trigger', type: 'string | ReactNode', default: 'Required', details: 'You can pass trigger to popover.' },
  { name: 'children', type: 'string | ReactNode', default: 'Required', details: 'You can pass popover content as children.' }
];

export const progressAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'value', type: 'number', default: 'Required', details: 'You can pass value to render progress.' }
];

export const radioGroupAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'itemClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'radioClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'labelClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'orientation', type: 'vertical | horizontal', default: 'horizontal', details: 'You can pass radio group orientation.' },
  { name: 'disabled', type: 'boolean', default: 'false', details: 'You can pass disabled to set default checkbox state.' },
  { name: 'items', type: 'RadioItem[]', default: 'Required', details: 'You can pass list of radio items.' },
  { name: 'selected', type: 'string', default: 'Required', details: 'You can pass default selected item.' },
  { name: 'onChange', type: '(selected: string) => void', default: 'Required', details: 'You can get callback when radio group changed.' }
];

export const selectAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'labelClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'selectClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'isMulti', type: 'boolean', default: 'false', details: 'You can pass isMulti option to switch between single / multi select.' },
  { name: 'isLoading', type: 'boolean', default: 'false', details: 'You can pass isLoading option to show loading indicator.' },
  { name: 'isCreatable', type: 'boolean', default: 'false', details: 'You can pass isCreatable option to add create options feature.' },
  { name: 'isClearable', type: 'boolean', default: 'false', details: 'You can pass isClearable option to show clear option for select.' },
  { name: 'isSearchable', type: 'boolean', default: 'false', details: 'You can pass isSearchable option to enable searching feature.' },
  { name: 'isDisabled', type: 'boolean', default: 'false', details: 'You can pass isDisabled option to disable select.' },
  { name: 'placeholder', type: 'string', default: 'Required', details: 'You can pass placeholder for select.' },
  { name: 'label', type: 'string', default: "' '", details: 'You can pass label to show label for select.' },
  { name: 'options', type: 'ReactSelectOption[]', default: 'Required', details: 'You can pass options for the select.' },
  { name: 'value', type: 'ReactSelectOption[]', default: 'Required', details: 'You can pass default selected items.' },
  {
    name: 'onChangeOptions',
    type: '(values: ReactSelectOption[]) => void;',
    default: 'Required',
    details: 'You can get callback when select changed.'
  },
  { name: 'onCreateOptions', type: '(value: string) => void;', default: 'Required', details: 'You can get callback when new select item created.' }
];

export const sheetAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'headerClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'titleClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'contentClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'title', type: 'string', default: 'Required', details: 'You can pass title for sheet.' },
  { name: 'size', type: 'SheetSize', default: 'SheetSize.MD', details: 'You can pass size of the sheet.' },
  { name: 'isOpen', type: 'boolean', default: 'false', details: 'You can pass isOpen to show / hide alert box.' },
  { name: 'children', type: 'string | ReactNode', default: 'Required', details: 'You can pass sheet content as children.' },
  { name: 'onClose', type: '() => void', default: 'Required', details: 'You can get callback when sheet got closed.' }
];

export const skeletonAttributes = [{ name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' }];

export const sliderAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'labelClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'sliderClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'label', type: 'string', default: "' '", details: 'You can pass label name to slider.' },
  { name: 'defaultValue', type: 'number', default: '0', details: 'You can pass default value to slider.' },
  { name: 'max', type: 'number', default: '100', details: 'You can pass max value to slider.' },
  { name: 'step', type: 'number', default: '1', details: 'You can pass step value to slider.' },
  { name: 'disabled', type: 'boolean', default: 'false', details: 'You can pass disabled to slider.' },
  { name: 'onChange', type: '(value: number) => void', default: 'Required', details: 'You can get callback when slider changed.' }
];

export const switchAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'labelClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'switchClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'label', type: 'string', default: "' '", details: 'You can pass label to switch.' },
  { name: 'enabled', type: 'boolean', default: 'false', details: 'You can pass enabled to switch.' },
  { name: 'disabled', type: 'boolean', default: 'false', details: 'You can pass disabled to switch.' },
  { name: 'onChange', type: '(enabled: boolean) => void', default: 'Required', details: 'You can get callback when switch changed.' }
];

export const tableAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'captionClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'headerClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'headerRowClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'headerCellClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'bodyClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'bodyRowClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'bodyCellClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'caption', type: 'string', default: "' '", details: 'You can pass caption to table.' },
  { name: 'columnDef', type: 'ColumnDef[]', default: 'Required', details: 'You can pass column definition to table.' },
  { name: 'data', type: 'Object[]', default: 'Required', details: 'You can pass data to table.' }
];

export const tabsAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'itemClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'activeItemClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'items', type: 'string[]', default: 'Required', details: 'You can pass items for the tabs.' },
  { name: 'isFull', type: 'boolean', default: 'false', details: 'You can pass isFull to occupy full width.' },
  { name: 'selected', type: 'string', default: 'Required', details: 'You can pass default selected tab.' },
  { name: 'onChange', type: '(selected: string) => void', default: 'Required', details: 'You can get callback when tabs changed.' },
  { name: 'children', type: 'ReactNode', default: 'Required', details: 'You can pass tabs content as children.' }
];

export const tabsContentAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'item', type: 'string', default: 'Required', details: 'You can pass item for the tab content.' },
  { name: 'children', type: 'ReactNode', default: 'Required', details: 'You can pass tabs content as children.' }
];

export const textareaAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'labelClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'textareaClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'id', type: 'string', default: 'textarea', details: 'You can pass id to create unique identifier.' },
  { name: 'label', type: 'string', default: "' '", details: 'You can pass label of the textarea.' },
  { name: 'placeholder', type: 'string', default: "' '", details: 'You can pass placeholder of the textarea.' },
  { name: 'value', type: 'string', default: "' '", details: 'You can pass value of the textarea.' },
  { name: 'disabled', type: 'boolean', default: 'false', details: 'You can pass disabled to set default textarea state.' },
  { name: 'onChange', type: '(value: string | number) => void', default: 'Required', details: 'You can get callback when textarea value changed.' }
];

export const toastAttributes = [
  { name: 'description', type: 'string', default: 'Required', details: 'You can pass description to show toast.' },
  { name: 'title', type: 'string', default: "' '", details: 'You can pass title to show toast with title.' }
];

export const tooltipAttributes = [
  { name: 'className', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'triggerClassName', type: 'string', default: "' '", details: 'You can customise by passing tailwind classes.' },
  { name: 'message', type: 'string', default: 'Required', details: 'You can pass message for the tooltip content.' },
  { name: 'children', type: 'ReactNode', default: 'Required', details: 'You can pass tooltip content as children.' }
];

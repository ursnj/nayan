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

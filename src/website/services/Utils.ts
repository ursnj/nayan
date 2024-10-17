import {
  Badge,
  CircleAlert,
  CreditCard,
  GalleryVertical,
  ListCollapse,
  MessageSquare,
  MessageSquareWarning,
  Slash,
  Square,
  Link,
  SquareCheck,
  TextCursorInput,
  SquareArrowOutUpRight,
  Loader,
  EllipsisVertical,
  PictureInPicture2,
  SlidersHorizontal,
  Columns3,
  RectangleEllipsis,
  CircleCheck,
  SquareMousePointer,
  StickyNote,
  TextSelect,
  ToggleRight,
  Grid3x3,
  AppWindow,
  MessageSquareText,
  MessageSquareDot,
  FileCode,
  HandCoins,
  Settings
} from 'lucide-react';
import {
  accordionAttributes,
  alertAttributes,
  badgeAttributes,
  buttonAttributes,
  buttonGroupAttributes,
  cardAttributes,
  checkboxAttributes,
  confirmAlertAttributes,
  dialogAttributes,
  dividerAttributes,
  infiniteScrollAttributes,
  inputAttributes,
  inputHookAttributes,
  linkAttributes,
  loadingAttributes,
  menuAttributes,
  popoverAttributes,
  progressAttributes,
  radioGroupAttributes,
  selectAttributes,
  sheetAttributes,
  skeletonAttributes,
  sliderAttributes,
  switchAttributes,
  tableAttributes,
  tabsAttributes,
  textareaAttributes,
  toastAttributes,
  tooltipAttributes
} from '@/website/services/Attributes';
import {
  accordionCode,
  alertCode,
  badgeCode,
  buttonCode,
  buttonGroupCode,
  cardCode,
  checkBoxCode,
  confirmAlertCode,
  dialogCode,
  dividerCode,
  infiniteScrollCode,
  inputCode,
  inputHookCode,
  linkCode,
  linkifyCode,
  loadingCode,
  menuCode,
  popoverCode,
  progressCode,
  radioGroupCode,
  selectCode,
  sheetCode,
  skeletonCode,
  sliderCode,
  switchCode,
  tableCode,
  tabsCode,
  textareaCode,
  toastCode,
  tooltipCode
} from '@/website/services/CodeBlocks';
import {
  accordionTags,
  alertTags,
  badgeTags,
  buttonGroupTags,
  buttonTags,
  cardTags,
  checkboxTags,
  confirmAlertTags,
  dialogTags,
  dividerTags,
  infiniteScrollTags,
  inputTags,
  linkifyTags,
  linkTags,
  loadingTags,
  menuTags,
  popoverTags,
  progressTags,
  radioGroupTags,
  selectTags,
  sheetTags,
  sitemaperTags,
  skeletonTags,
  sliderTags,
  switchTags,
  tableTags,
  tabsTags,
  textareaTags,
  toastTags,
  tooltipTags
} from '@/website/services/Tags';

export const getMenuItem = (path: string) => {
  return sidebarItems.find(item => item.link === path);
};
export const getMenuItemByTag = (tag: string) => {
  return sidebarItems.find((component: any) => component.tags?.find((tg: any) => tg.sku === tag));
};

export const sidebarItems = [
  { title: 'Get Started', description: '', link: '', isHeading: true },
  { title: 'Installation', description: '', link: '/installation', icon: Settings },
  {
    title: 'Components',
    description:
      'Components are reusable building blocks of a user interface that encapsulate a specific piece of functionality or UI design. Each component can represent a distinct part of the application, such as buttons, forms, modals, or navigation bars. Components help organize and structure code, making it easier to manage, maintain, and scale applications by allowing developers to reuse consistent elements across different parts of the project.',
    link: '/components',
    isHeading: true
  },
  {
    title: 'Accordion',
    description:
      'An Accordion component is a UI element that allows users to expand and collapse sections of content. It is commonly used to organize information in a compact and accessible manner, displaying only the headers by default and revealing the associated content when clicked. This helps improve the readability of complex or lengthy information by reducing clutter on the page.',
    link: '/components/accordion',
    attributes: accordionAttributes,
    code: accordionCode,
    tags: accordionTags,
    icon: ListCollapse,
    isComponent: true
  },
  {
    title: 'Alert',
    description:
      "An Alert component is a UI element used to display important messages or notifications to users. It can convey different types of information such as success, warning, error, or informational messages, typically styled with distinct colors and icons to highlight the message's significance. Alerts are often used to grab the user's attention and provide immediate feedback on actions or events.",
    link: '/components/alert',
    attributes: alertAttributes,
    code: alertCode,
    tags: alertTags,
    icon: CircleAlert,
    isComponent: true
  },
  {
    title: 'Badge',
    description:
      'A Badge component is a small UI element used to display a count, status, or label associated with another element, such as an icon or button. Badges are commonly used to highlight notifications, messages, or any relevant information in a compact and visually distinct way, often appearing as small circles or rectangles with numbers or text.',
    link: '/components/badge',
    attributes: badgeAttributes,
    code: badgeCode,
    tags: badgeTags,
    icon: Badge,
    isComponent: true
  },
  {
    title: 'Button',
    description:
      'A Button component is a fundamental UI element that allows users to trigger actions or events, such as submitting a form, opening a dialog, or navigating to another page. Buttons are interactive and typically styled to stand out, making it easy for users to identify and interact with them. They can come in various types, such as primary, secondary, or disabled, depending on their purpose or state.',
    link: '/components/button',
    attributes: buttonAttributes,
    code: buttonCode,
    tags: buttonTags,
    icon: Square,
    isComponent: true
  },
  {
    title: 'Button Group',
    description:
      'A Button Group component is a UI element that groups multiple buttons together, allowing users to select from a set of related actions or options. It helps organize buttons in a compact, cohesive layout, typically displayed in a horizontal or vertical row. Button Groups are useful for actions that are closely related or mutually exclusive, providing a clean and structured way to present multiple controls.',
    link: '/components/button-group',
    attributes: buttonGroupAttributes,
    code: buttonGroupCode,
    tags: buttonGroupTags,
    icon: Columns3,
    isComponent: true
  },
  {
    title: 'Card',
    description:
      'A Card component is a versatile UI element used to display content in a structured and visually appealing way. It typically contains related information, such as text, images, buttons, and other elements, within a bordered or shadowed container. Cards are often used for presenting individual items, like products, articles, or profiles, making the content easy to scan and interact with.',
    link: '/components/card',
    attributes: cardAttributes,
    code: cardCode,
    tags: cardTags,
    icon: CreditCard,
    isComponent: true
  },
  {
    title: 'Checkbox',
    description:
      'A Checkbox component is a UI element that allows users to select or deselect one or more options from a list. It typically appears as a small square that can be checked (ticked) or unchecked. Checkboxes are often used in forms, settings, or filters where multiple selections are needed, and they provide a clear, binary choice for users.',
    link: '/components/checkbox',
    attributes: checkboxAttributes,
    code: checkBoxCode,
    tags: checkboxTags,
    icon: SquareCheck,
    isComponent: true
  },
  {
    title: 'Confirm Alert',
    description:
      'A Confirm Alert component is a UI element that prompts users to confirm or cancel an action before proceeding. It typically displays a message asking for confirmation, along with "Confirm" and "Cancel" buttons, ensuring that the user consciously approves or rejects the action, often used for critical tasks like deletions or irreversible changes.',
    link: '/components/confirm-alert',
    attributes: confirmAlertAttributes,
    code: confirmAlertCode,
    tags: confirmAlertTags,
    icon: MessageSquareWarning,
    isComponent: true
  },
  {
    title: 'Dialog',
    description:
      'A Dialog component is a UI element that displays a pop-up window over the main content to capture user attention or request input. It is often used for tasks like confirmations, alerts, forms, or other interactions that require user feedback before proceeding. Dialogs can include buttons like "OK" or "Cancel" to confirm or dismiss actions, and typically block interaction with the underlying content until closed.',
    link: '/components/dialog',
    attributes: dialogAttributes,
    code: dialogCode,
    tags: dialogTags,
    icon: MessageSquare,
    isComponent: true
  },
  {
    title: 'Divider',
    description:
      'A Divider component is a simple UI element used to separate content within a layout, creating visual distinction between sections. It helps enhance the organization and readability of the interface by providing clear boundaries between different elements, such as text blocks, images, or other components. Dividers can be styled in various ways (solid, dashed, or dotted) and can vary in thickness and color to match the overall design of the application.',
    link: '/components/divider',
    attributes: dividerAttributes,
    code: dividerCode,
    tags: dividerTags,
    icon: Slash,
    isComponent: true
  },
  {
    title: 'Infinite Scroll',
    description:
      'An Infinite Scroll component is a user interface feature that automatically loads and displays additional content as the user scrolls down a page. Instead of traditional pagination, this component creates a seamless browsing experience by continuously appending new items, such as images or articles, when the user reaches the bottom of the viewport. This enhances user engagement and keeps the content flow uninterrupted, making it ideal for applications like social media feeds, product galleries, and news websites.',
    link: '/components/infinite-scroll',
    attributes: infiniteScrollAttributes,
    code: infiniteScrollCode,
    tags: infiniteScrollTags,
    icon: GalleryVertical,
    isComponent: true
  },
  {
    title: 'Input',
    description:
      'An Input component is a user interface element that allows users to enter data, such as text, numbers, or selections. It typically includes various types, such as text fields, checkboxes, radio buttons, and dropdowns, providing flexibility for different data types. Input components are essential for forms and interactive applications, enabling users to submit information effectively and efficiently.',
    link: '/components/input',
    attributes: inputAttributes,
    code: inputCode,
    tags: inputTags,
    icon: TextCursorInput,
    isComponent: true
  },
  {
    title: 'Input Hook Form',
    description:
      'An Input with React Hook Form component is a controlled input field that integrates with the React Hook Form library for efficient form handling in React applications. It simplifies the process of managing form state, validation, and submission. By utilizing React Hook Form, this component enables easy tracking of input values, ensures validation rules are applied, and provides streamlined error handling, making it a powerful tool for building robust forms with minimal boilerplate code.',
    link: '/components/input-hook-form',
    attributes: inputHookAttributes,
    code: inputHookCode,
    tags: inputTags,
    icon: TextCursorInput,
    isComponent: true
  },
  {
    title: 'Link',
    description:
      'A Link component is a UI element that allows users to navigate from one page or section to another within a web application or website. Typically styled as underlined text or buttons, links provide a clear indication of interactivity. They can point to internal or external resources and often include features like hover effects or icons to enhance user experience and accessibility.',
    link: '/components/link',
    attributes: linkAttributes,
    code: linkCode,
    tags: linkTags,
    icon: Link,
    isComponent: true
  },
  {
    title: 'Linkify',
    description:
      'A Linkify component is a UI tool that automatically detects and converts plain text URLs within a content area into clickable hyperlinks. This enhances user experience by allowing easy access to external resources without the need for manual formatting. Linkify typically recognizes various URL formats and ensures that they are presented in a visually distinct manner, making navigation seamless and intuitive.',
    link: '/components/linkify',
    attributes: linkAttributes,
    code: linkifyCode,
    tags: linkifyTags,
    icon: SquareArrowOutUpRight,
    isComponent: true
  },
  {
    title: 'Loading',
    description:
      'A Loading component is a UI element that indicates to users that a process is ongoing, such as data fetching, page loading, or background tasks. It typically features visual indicators like spinners, progress bars, or animated icons to convey that the application is busy and to enhance the user experience by preventing confusion or frustration during waiting periods.',
    link: '/components/loading',
    attributes: loadingAttributes,
    code: loadingCode,
    tags: loadingTags,
    icon: Loader,
    isComponent: true
  },
  {
    title: 'Dropdown Menu',
    description:
      'A Dropdown Menu component is a UI element that allows users to select an option from a list that appears when the user clicks or hovers over a button or link. This component helps save space on the interface by displaying additional options only when needed. Dropdown menus are commonly used for navigation, settings, or forms, enabling users to choose from multiple choices in a clean and organized manner.',
    link: '/components/menu',
    attributes: menuAttributes,
    code: menuCode,
    tags: menuTags,
    icon: EllipsisVertical,
    isComponent: true
  },
  {
    title: 'Popover',
    description:
      'A Popover component is a UI element that displays additional information or actions when users interact with a specific trigger, such as a button or link. It typically appears as a small overlay or tooltip that provides context, tips, or options without navigating away from the current page. Popovers enhance user experience by offering relevant content in a concise format while maintaining focus on the main interface.',
    link: '/components/popover',
    attributes: popoverAttributes,
    code: popoverCode,
    tags: popoverTags,
    icon: PictureInPicture2,
    isComponent: true
  },
  {
    title: 'Progress',
    description:
      'A Progress component visually indicates the completion status of a task or process. It typically consists of a progress bar that fills up as the task progresses, providing users with a clear and immediate understanding of how much of the task is completed and how much remains. This component is commonly used in forms, uploads, downloads, and loading states to enhance user experience by managing expectations and keeping users informed.',
    link: '/components/progress',
    attributes: progressAttributes,
    code: progressCode,
    tags: progressTags,
    icon: RectangleEllipsis,
    isComponent: true
  },
  {
    title: 'Radio Group',
    description:
      'A Radio Group component is a UI element that allows users to select one option from a set of mutually exclusive choices. It typically consists of multiple radio buttons, where only one button can be selected at a time. Radio groups are commonly used in forms to gather user preferences, ensuring a clear and organized way to present options for selection. They enhance user experience by providing a straightforward interface for making single-choice decisions.',
    link: '/components/radio-group',
    attributes: radioGroupAttributes,
    code: radioGroupCode,
    tags: radioGroupTags,
    icon: CircleCheck,
    isComponent: true
  },
  {
    title: 'Select',
    description:
      'A Select or ComboBox component is a UI element that allows users to choose one or more options from a dropdown list. It typically displays a default value or prompt, and when clicked, it expands to show a list of available choices. Users can either select an option from the list or, in the case of a ComboBox, input custom values. This component is ideal for conserving space in forms and making it easy for users to make selections quickly.',
    link: '/components/select',
    attributes: selectAttributes,
    code: selectCode,
    tags: selectTags,
    icon: SquareMousePointer,
    isComponent: true
  },
  {
    title: 'Sheet',
    description:
      'A Sheet component is a UI element that presents content in a sliding panel, often overlaying the main application interface. It is typically used for displaying additional information, forms, or actions without navigating away from the current view. Sheets can be swiped or tapped to expand or collapse, providing a clean and efficient way to manage user interactions and maintain focus on the main content.',
    link: '/components/sheet',
    attributes: sheetAttributes,
    code: sheetCode,
    tags: sheetTags,
    icon: StickyNote,
    isComponent: true
  },
  {
    title: 'Skeleton',
    description:
      'A Skeleton component is a placeholder UI element that represents the layout of content before it loads. It typically features a grey or light-colored shape mimicking the structure of the actual content (such as text blocks, images, or buttons) to indicate that loading is in progress. Skeleton components enhance user experience by providing a visual cue that content is being fetched, reducing perceived loading times and preventing layout shifts.',
    link: '/components/skeleton',
    attributes: skeletonAttributes,
    code: skeletonCode,
    tags: skeletonTags,
    icon: TextSelect,
    isComponent: true
  },
  {
    title: 'Slider',
    description:
      'A Slider component is a UI element that allows users to select a value from a range by sliding a handle along a track. It provides an interactive way to adjust settings, such as volume, brightness, or other continuous values, with smooth transitions. Sliders can be single or multi-valued, enabling users to make precise selections visually, enhancing the overall user experience.',
    link: '/components/slider',
    attributes: sliderAttributes,
    code: sliderCode,
    tags: sliderTags,
    icon: SlidersHorizontal,
    isComponent: true
  },
  {
    title: 'Switch',
    description:
      'A Switch component is a UI element that allows users to toggle between two states, typically representing an on/off or enabled/disabled choice. It is visually represented as a sliding toggle or checkbox and provides immediate feedback when the user interacts with it. Switch components are commonly used for settings, preferences, and feature activations in applications, enhancing user experience by simplifying the selection process.',
    link: '/components/switch',
    attributes: switchAttributes,
    code: switchCode,
    tags: switchTags,
    icon: ToggleRight,
    isComponent: true
  },
  {
    title: 'Table',
    description:
      'A Table component is a structured UI element that organizes and displays data in rows and columns, making it easy to read and compare information. Tables can include features like sorting, filtering, pagination, and inline editing, allowing users to interact with the data efficiently. They are commonly used to present datasets, such as user information, product listings, or any structured content that benefits from a grid-like layout.',
    link: '/components/table',
    attributes: tableAttributes,
    code: tableCode,
    tags: tableTags,
    icon: Grid3x3,
    isComponent: true
  },
  {
    title: 'Tabs',
    description:
      'A Tabs component is a UI element that allows users to switch between different views or sections of content within the same interface. Organized as a series of labeled tabs, this component enhances navigation by displaying only one section at a time, helping to reduce clutter and improve user experience. Users can easily access various related content or features by clicking on the respective tabs, making it ideal for dashboards, settings pages, or any multi-section layout.',
    link: '/components/tabs',
    attributes: tabsAttributes,
    code: tabsCode,
    tags: tabsTags,
    icon: AppWindow,
    isComponent: true
  },
  {
    title: 'Textarea',
    description:
      'A Textarea component is an input field that allows users to enter multi-line text. It provides a larger area for text input compared to a standard text input field, making it ideal for comments, feedback, or any scenario where users need to provide detailed information. Textareas can be resized, styled, and configured to support features like character limits, placeholders, and auto-resizing to enhance user experience.',
    link: '/components/textarea',
    attributes: textareaAttributes,
    code: textareaCode,
    tags: textareaTags,
    icon: TextCursorInput,
    isComponent: true
  },
  {
    title: 'Toast',
    description:
      'A Toast component is a transient notification that appears on the screen to provide feedback or information to users without interrupting their workflow. Typically displayed at the top or bottom of the screen, toasts are brief messages that automatically disappear after a short duration. They are commonly used to inform users about actions such as successful submissions, updates, or alerts, enhancing the overall user experience with minimal disruption.',
    link: '/components/toast',
    attributes: toastAttributes,
    code: toastCode,
    tags: toastTags,
    icon: MessageSquareText,
    isComponent: true
  },
  {
    title: 'Tooltip',
    description:
      'A Tooltip component is a small, informative pop-up that appears when a user hovers over or focuses on an element, such as a button or icon. It provides additional context or explanations about that element without cluttering the interface. Tooltips enhance user experience by offering helpful hints, instructions, or details, ensuring that information is accessible without overwhelming the layout.',
    link: '/components/tooltip',
    attributes: tooltipAttributes,
    code: tooltipCode,
    tags: tooltipTags,
    icon: MessageSquareDot,
    isComponent: true
  },
  { title: 'Dev Tools', description: '', link: '', isHeading: true },
  {
    title: 'Sitemaper',
    description:
      'Sitemaper is a powerful sitemap generator designed to simplify the process of creating accurate and efficient sitemaps for websites. It crawls through your site, maps its structure, and generates an optimized sitemap, helping improve SEO and site visibility. With customizable options for depth, frequency, and output paths, Sitemaper is a versatile tool for developers and site owners aiming to keep their web presence indexed properly.',
    link: '/sitemaper',
    tags: sitemaperTags,
    icon: FileCode
  },
  { title: 'More Guides', description: '', link: '/guides', isHeading: true },
  {
    title: 'Contributions',
    description:
      "We encourage and welcome all contributions! Feel free to submit ideas via Pull Requests (https://github.com/ursnj/nayan/pulls) or GitHub Issues (https://github.com/ursnj/nayan/issues). If you're looking to improve the code, check out our Development Instructions and enjoy the process!",
    link: '/contributions',
    icon: HandCoins
  }
];

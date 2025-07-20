import React from 'react';
import {
  Accessibility,
  Blocks,
  BookOpenText,
  Compass,
  FerrisWheel,
  GitCompare,
  Globe,
  HandCoins,
  LayoutGrid,
  MonitorSmartphone,
  PackageCheck,
  Palette,
  PencilRuler,
  Rocket,
  ShieldEllipsis,
  Slack
} from 'lucide-react';
import FeaturesItem from './FeaturesItem';

const features = [
  {
    title: 'Reusable Components',
    text: 'Nayan UI includes a variety of pre-designed and pre-implemented UI components such as buttons, forms, modals, navigation menus, and more. Developers can use these components as building blocks in their applications.',
    icon: FerrisWheel
  },
  {
    title: 'Customization',
    text: 'Nayan UI allows developers to customize the appearance and behavior of components to match the specific design and functionality requirements of your application. This can be done through props, theming, or CSS-in-JS solutions.',
    icon: PencilRuler
  },
  {
    title: 'Consistency',
    text: 'Nayan UI promotes design consistency across an application or even across multiple applications. Developers can use the same set of components with consistent styles and behavior throughout their projects.',
    icon: PackageCheck
  },
  {
    title: 'Accessibility',
    text: 'Nayan UI pays attention to accessibility (a11y) standards, ensuring that their components are usable by individuals with disabilities. This includes providing proper semantic HTML elements, keyboard navigation support, and ARIA attributes.',
    icon: Accessibility
  },
  {
    title: 'Documentation',
    text: 'Nayan UI comes with comprehensive documentation that explains how to use each component, including examples, props, and guidelines for best practices. Documentation helps developers understand how to integrate and customize the components effectively.',
    icon: BookOpenText
  },
  {
    title: 'Theming and Styling',
    text: "Nayan UI offers theming and styling options to allow developers to adapt the appearance of components to fit their application's design system. This may involve using CSS classes, CSS-in-JS solutions, or predefined themes.",
    icon: Palette
  },
  {
    title: 'Responsive Design',
    text: 'Nayan UI is designed to work well with responsive web design, making it easier to create mobile-friendly and responsive user interfaces.',
    icon: MonitorSmartphone
  },
  {
    title: 'Cross-browser Compatibility',
    text: 'Nayan UI components are tested and optimized to work across different web browsers to ensure a consistent user experience for all users.',
    icon: Compass
  },
  {
    title: 'Versioning and Updates',
    text: 'Nayan UI provides versioning to help manage updates and ensure backward compatibility. This allows developers to adopt new features or bug fixes without breaking existing code.',
    icon: GitCompare
  },
  {
    title: 'Community and Support',
    text: 'Nayan UI have active communities, forums, and support channels where developers can ask questions, report issues, and share their experiences.',
    icon: Slack
  },
  {
    title: 'Performance',
    text: "Nayan UI prioritize's performance and aim to minimize the impact of their components on the overall application's performance. This includes optimizing for rendering and minimizing unnecessary re-renders.",
    icon: Rocket
  },
  {
    title: 'Internationalization',
    text: 'Nayan UI includes internationalization support, making it easier to create applications that can be translated into multiple languages.',
    icon: Globe
  },
  {
    title: 'Testing Utilities',
    text: 'Nayan UI provides testing utilities or guidelines for testing components to ensure they function as expected.',
    icon: ShieldEllipsis
  },
  {
    title: 'Integration with Popular Tools',
    text: 'Nayan UI integrates seamlessly with popular frameworks like Next.js, Gatsby and Plain react. and development tools, such as state management libraries (e.g., Redux, Mobx) and build tools (e.g., Vite, Webpack, Babel).',
    icon: Blocks
  },
  {
    title: 'License and Usage Terms',
    text: 'Nayan UI is completly open source project, anybody can contribute and use it for free of cost.',
    icon: HandCoins
  }
];

const Features = () => {
  return (
    <section className="bg-card flex flex-col justify-center text" id="features">
      <div className="container mx-auto mt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 md:gap-x-12 md:gap-y-16 gap-8 mb-16">
          {features.map(a => (
            <FeaturesItem key={a.title} title={a.title} text={a.text} icon={a.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import {
  BadgePercent,
  CalendarClock,
  FolderClosed,
  LayoutGrid,
  QrCode,
  RemoveFormatting,
  ScrollText,
  ShieldCheck,
  ShoppingCart,
  Users2
} from 'lucide-react';
import FeaturesItem from './FeaturesItem';

const features = [
  {
    title: 'Employee Management',
    text: 'Say goodbye to spreadsheets and rigid systems. Choose Surgy employee management tool that makes employee management simple to plan, manage & track. Surgy lets HR managers and business owners streamline their employee-related activities. which includes employee onboarding, timesheets, leaves, performance, benefits, and personal details.',
    icon: Users2
  },
  {
    title: 'Projects Management',
    text: 'Manage simple to complex projects and everything in between with Surgy. Manage any project your way and Collaborate seamlessly across teams and departments to gain visibility into the progress of your work. Keep everyone aligned with a platform they will enjoy using to ensure a smoother execution.',
    icon: LayoutGrid
  },
  {
    title: 'Assets Management',
    text: 'Manage your organization’s assets, starting from small components to industrial equipment with ease. With our Asset management tool you can take control of the life-cycle performance of your assets and gain insight into asset maintenance costs in the short and long term.',
    icon: QrCode
  },
  {
    title: 'Documents Management',
    text: 'Keeping your paperless office documents only on your computer or local server poses the risks of hard drive failure, fire, flood or burglary. And what if you want to access one of those important files away from the office ? Meet Surgy. The ultimate online document management system for any organization,the most user-friendly, Amazingly easy to use, highly secure and affordable.',
    icon: FolderClosed
  }
];

const Features = () => {
  return (
    <section className="bg-background flex flex-col justify-center text" id="features">
      <div className="container mx-auto">
        <div className="text-3xl text text-center mt-12 mb-5">Features</div>
        <div className="text text-base mb-12 text-center max-w-[900px] mx-auto">
          Surgy is not just limited to collaboration but also automates your daily tasks in one place like, Managing Employees, Leaves, Documents,
          Assets, Policies, Projects, Sales, Purchases, Invoices and lot more.
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-x-12 gap-y-16 mb-16">
          {features.map(a => (
            <FeaturesItem key={a.title} title={a.title} text={a.text} icon={a.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

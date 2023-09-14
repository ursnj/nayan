import React from 'react';
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import { NDivider } from '@/components/NDivider';

const Footer = () => {
  return (
    <section className="bg-card flex flex-col justify-center text">
      <NDivider />
      <div className="container mx-auto">
        <div className="grid md:grid-cols-8 col-span-3 gap-12 pb-3 pt-5">
          <div className="md:col-span-3 col-span-1">
            <div className="text-base text-text mb-2">ABOUT NAYAN UI</div>
            <div className="text-sm leading-7">
              Nayan UI provides React component library based on Tailwind CSS and @shadcn/ui. This library is a collection of pre-designed and
              pre-built React components that can be used to quickly and easily build beautiful and functional and fully accessible user interfaces
              for your web application.
            </div>
          </div>
          <div className="col-span-1" />
          <div className="md:col-span-2 col-span-1">
            <div className="text-base text-text mb-2">QUICK LINKS</div>
            <ul className="text-text text-sm m-0 list-none">
              <li className="leading-7 cursor-pointer">
                <a className="text-text hover:text-primary no-underline" href="/" target="_blank">
                  Home
                </a>
              </li>
              <li className="leading-7 cursor-pointer">
                <a className="text-text hover:text-primary no-underline" href="/" target="_blank">
                  Installation
                </a>
              </li>
              <li className="leading-7 cursor-pointer">
                <a className="text-text hover:text-primary no-underline" href="/" target="_blank">
                  Components
                </a>
              </li>
              <li className="leading-7 cursor-pointer">
                <a className="text-text hover:text-primary no-underline" href="/" target="_blank">
                  Contributions
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 col-span-1">
            <div className="text-base text-text mb-2">CONTACT US</div>
            <div className="text-sm text leading-7 mb-2">
              <strong>Email:</strong>{' '}
              <a className="text-text" href="mailto:hello@surgy.app" target="_blank">
                hello@nayanui.com
              </a>
            </div>
            <div className="text-sm text leading-7 mb-2">
              <strong>Social Media:</strong>
            </div>
            <div className="text flex items-center my-5 mt-3">
              <a className="text-text hover:text-primary no-underline" href="https://twitter.com/surgyapp" target="_blank" aria-label="Surgy Twitter">
                <span className="pr-4 cursor-pointer">
                  <Twitter size="1.6em" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <NDivider />
        <div className="md:flex justify-between items-center py-3">
          <div className="text-sm text text-center md:mb-0 mb-2">All Rights Reserved © {new Date().getFullYear()}</div>
          <div className="text-sm text text-center">
            Designed by{' '}
            <a className="text-primary font-semibold no-underline" href="http://www.ursnj.com" target="_blank" aria-label="Niranjan Devasani">
              Niranjan Devasani
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

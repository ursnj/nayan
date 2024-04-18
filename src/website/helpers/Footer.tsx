import React from 'react';
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import { NDivider } from '@/components/NDivider';

const Footer = () => {
  return (
    <section className="bg-card flex flex-col justify-center text">
      <div className="container mx-auto">
        <NDivider />
        <div className="md:flex justify-between items-center py-3">
          <div className="text-sm text text-center md:mb-0 mb-2">All Rights Reserved © {new Date().getFullYear()}</div>
          <div className="text-sm text text-center">
            Designed by{' '}
            <a className="text-primary font-semibold no-underline" href="http://www.ursnj.com" target="_blank" aria-label="Niranjan Devasani">
              UrsNJ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React from 'react';
import { NDivider } from '@/components/NDivider';
import { NLink } from '@/components/NLink';

const Footer = () => {
  return (
    <section className="bg-card flex flex-col justify-center text">
      <div className="container mx-auto">
        <NDivider />
        <div className="md:flex justify-between items-center py-3">
          <div className="text-sm text text-center md:mb-0 mb-2">All Rights Reserved © {new Date().getFullYear()}</div>
          <div className="text-sm text text-center">
            Designed by{' '}
            <NLink className="font-semibold" href="http://www.ursnj.com" aria-label="Niranjan Devasani">
              UrsNJ
            </NLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

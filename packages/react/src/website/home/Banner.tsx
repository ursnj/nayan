import React from 'react';
import { Link } from 'react-router-dom';
import { NButton } from '@/components/NButton';
import Bubbles from '@/website/helpers/Bubbles';

const Banner = () => {
  return (
    <section className="main bg-card flex items-center justify-center" id="home">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex flex-col justify-center md:p-0 py-5 px-3">
            <h1 className="text-3xl md:mb-5 mb-3 leading-relaxed">React Component Library</h1>
            <div className="text-base leading-loose mb-5 text">
              Nayan UI provides React component library based on Tailwind CSS and Radix UI (Shadcn). This library is a collection of pre-designed and
              pre-built React components that can be used to quickly and easily build beautiful, functional and fully accessible user interfaces for
              your web application.
            </div>
            <div className="p-0">
              <Link to="/components" className="mr-3">
                <NButton tabIndex={-1} className="px-4 bg-green-700 hover:bg-green-800 border-green-700">
                  Components
                </NButton>
              </Link>
              <Link to="/installation">
                <NButton tabIndex={-1} className="px-4">
                  Installation
                </NButton>
              </Link>
            </div>
          </div>
          <Bubbles>
            <>
              <div className="p-5 bg-card rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1">
                  <div className="h-4 md:w-48 w-36 bg-border rounded" />
                </div>
                <div>
                  <div className="md:w-24 w-16 h-6 rounded-lg bg-purple-300" />
                </div>
              </div>
              <div className="p-5 bg-card rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1">
                  <div className="h-4 md:w-56 w-30 bg-border rounded" />
                </div>
                <div>
                  <div className="md:w-16 w-12 h-6 rounded-lg bg-yellow-300" />
                </div>
              </div>
              <div className="p-5 bg-card rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1">
                  <div className="h-4 w-44 bg-border rounded" />
                </div>
                <div>
                  <div className="md:w-28 w-20 h-6 rounded-lg bg-pink-300" />
                </div>
              </div>
              <div className="p-5 bg-card rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1">
                  <div className="h-4 w-44 bg-border rounded" />
                </div>
                <div>
                  <div className="md:w-24 w-12 h-6 rounded-lg bg-green-300" />
                </div>
              </div>
            </>
          </Bubbles>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from 'react';
import Footer from '../helpers/Footer';
import Banner from './Banner';
import Features from './Features';
import Meta from '@/website/helpers/Meta';

const Home = () => {
  return (
    <div>
      <Meta />
      <Banner />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;

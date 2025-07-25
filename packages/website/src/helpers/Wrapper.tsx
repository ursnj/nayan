import React, { ReactNode } from 'react';
import Header from './Header';

interface Props {
  children: ReactNode;
}

const Wrapper = (props: Props) => {
  return (
    <>
      <Header />
      <div className="main mt-[58px]">{props.children}</div>
    </>
  );
};

export default Wrapper;

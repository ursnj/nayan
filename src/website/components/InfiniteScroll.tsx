import { NCard } from '@/components/NCard';
import { NInfiniteScroll } from '@/components/NInfiniteScroll';
import { NLoading } from '@/components/NLoading';
import React, { useState } from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import SubHeader from '../helpers/SubHeader';
import { infiniteScrollCode } from '../services/CodeBlocks';

const InfiniteScroll = () => {
  const [items, setItems] = useState(new Array(20).fill(''));
  const [isFetching, setIsFetching] = useState(false);

  const fetchNextPage = () => {
    setIsFetching(true);
    setTimeout(() => {
      const newItems = [...items, ...new Array(20).fill('')];
      setItems(newItems);
      setIsFetching(false);
    }, 2000);
  };

  return (
    <Sidebar title="Infinite Scroll">
      <div className="mb-5">A component to load more data when user scroll on the screen.</div>

      <SubHeader title="Usage">
        <Code code={infiniteScrollCode} />
      </SubHeader>

      <SubHeader title="Demo">
        <NInfiniteScroll
          next={() => !isFetching && fetchNextPage()}
          hasMore={true}
          loader={<NLoading />}
          dataLength={items.length}
          scrollThreshold={0.99}>
          {items.map((item: any, index: number) => (
            <NCard className="p-3 mb-3">Item {index}</NCard>
          ))}
        </NInfiniteScroll>
      </SubHeader>
    </Sidebar>
  );
};

export default InfiniteScroll;

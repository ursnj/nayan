import React, { useState } from 'react';
import ComponentWrapper from '../helpers/ComponentWrapper';
import { NCard, NInfiniteScroll, NLoading } from 'nayan';

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
    <ComponentWrapper>
      <NInfiniteScroll
        next={() => !isFetching && fetchNextPage()}
        hasMore={items.length < 40}
        loader={<NLoading />}
        dataLength={items.length}
        scrollThreshold={0.99}>
        {items.map((item: any, index: number) => (
          <NCard className="p-3 mb-3">Item {index}</NCard>
        ))}
      </NInfiniteScroll>
    </ComponentWrapper>
  );
};

export default InfiniteScroll;

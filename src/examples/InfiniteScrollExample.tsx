import { NInfiniteScroll } from '../components/NInfiniteScroll';

const InfiniteScrollExample = () => {
  const items = new Array(5).fill(1);
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="nyn-text mb-3 text-lg mt-5">Infinite Scroll</h1>
      <NInfiniteScroll
        next={() => console.log('Get Next Data')}
        hasMore={true}
        loader={<div className="nyn-text">Loading...</div>}
        dataLength={items.length}
        scrollThreshold={0.99}>
        {items.map((_, index) => (
          <div className="h-[50px] mb-3 nyn-background-card nyn-border rounded" key={index} />
        ))}
      </NInfiniteScroll>
    </div>
  );
};

export default InfiniteScrollExample;

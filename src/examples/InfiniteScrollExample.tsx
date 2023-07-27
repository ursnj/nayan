import { NInfiniteScroll } from '../components/NInfiniteScroll';
import { NCard } from '../components/NCard';

const InfiniteScrollExample = () => {
  const items = new Array(5).fill(1);
  return (
    <div className="break-inside-avoid">
      <h1 className="text-text mb-3 text-lg mt-5">Infinite Scroll</h1>
      <NInfiniteScroll
        next={() => console.log('Get Next Data')}
        hasMore={true}
        loader={<div className="text-text">Loading...</div>}
        dataLength={items.length}
        scrollThreshold={0.99}>
        {items.map((_, index) => (
          <NCard className="mb-3 p-5 text-text" key={index}>
            {index}
          </NCard>
        ))}
      </NInfiniteScroll>
    </div>
  );
};

export default InfiniteScrollExample;

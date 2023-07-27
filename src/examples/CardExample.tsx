import { NCard } from '@/components/NCard';

const CardExample = () => {
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="text-text mb-3 text-lg">Card:</h1>
      <NCard className="p-2">
        <div className="text-text">Sample Card</div>
      </NCard>
    </div>
  );
};

export default CardExample;

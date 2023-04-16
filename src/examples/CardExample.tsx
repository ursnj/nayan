import { NCard } from '../components/NCard';

const CardExample = () => {
  return (
    <div className="break-inside mb-16">
      <h1 className="nyn-text mb-3 text-lg">Card:</h1>
      <NCard className="p-2">
        <div className="nyn-text">Sample Card</div>
      </NCard>
    </div>
  );
};

export default CardExample;

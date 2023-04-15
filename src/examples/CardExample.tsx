import { NDisclosure } from '../components/NDisclosure';
import { NLink } from '../components/NLink';
import { NCard } from '../components/NCard';

const CardExample = () => {
  return (
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg">Card:</h1>
      <NCard className="p-2">
        <div className="nyn-text">Sample Card</div>
      </NCard>
    </div>
  );
};

export default CardExample;

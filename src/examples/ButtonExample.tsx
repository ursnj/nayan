import { NButton } from '../components/NButton';
import { Size } from '../components/Types';

const BadgeExample = () => {
  return (
    <div className="break-inside mb-16">
      <h1 className="nyn-text mb-3 text-lg text-left">Buttons:</h1>
      <NButton size={Size.XS} onClick={() => console.log('Button clicked')} className="nyn-text nyn-background-card nyn-border mr-2">
        Button
      </NButton>
      <NButton
        size={Size.XS}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-blue-500 hover:bg-blue-600 border border-blue-600 mr-2">
        Button
      </NButton>
      <NButton
        size={Size.SM}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-green-500 hover:bg-green-600 border border-green-600 mr-2">
        Button
      </NButton>
      <NButton
        size={Size.MD}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-yellow-500 hover:bg-yellow-600 border border-yellow-600 mr-2">
        Button
      </NButton>
      <NButton
        size={Size.LG}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-red-500 hover:bg-red-600 border border-red-600 mr-2">
        Button
      </NButton>
    </div>
  );
};

export default BadgeExample;

import { NBadge } from '../components/NBadge';
import { Size } from '../components/Types';

const BadgeExample = () => {
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="nyn-text mb-3 text-lg text-left">Badge:</h1>
      <NBadge size={Size.XS} name="Sample" onClose={() => console.log('Badge closed')} className="nyn-text nyn-background-card nyn-border mr-2" />
      <NBadge size={Size.XS} name="Sample" onClose={() => console.log('Badge closed')} className="text-blue-700 bg-blue-300 mr-2" />
      <NBadge size={Size.SM} name="Sample" onClose={() => console.log('Badge closed')} className="text-green-700 bg-green-300 mr-2" />
      <NBadge size={Size.MD} name="Sample" onClose={() => console.log('Badge closed')} className="text-yellow-700 bg-yellow-300 mr-2" />
      <NBadge size={Size.LG} name="Sample" onClose={() => console.log('Badge closed')} className="text-red-700 bg-red-300 mr-2" />
    </div>
  );
};

export default BadgeExample;

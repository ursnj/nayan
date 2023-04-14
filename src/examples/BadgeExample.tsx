import { BadgeSize, NBadge } from '../components/NBadge';

const BadgeExample = () => {
  return (
    <>
      <h1 className="nyn-text mb-3 text-lg text-left">Badge:</h1>
      <NBadge size={BadgeSize.XS} name="Sample" onClose={() => console.log('Badge closed')} className="text-blue-700 bg-blue-300 mr-2" />
      <NBadge size={BadgeSize.SM} name="Sample" onClose={() => console.log('Badge closed')} className="text-green-700 bg-green-300 mr-2" />
      <NBadge size={BadgeSize.MD} name="Sample" onClose={() => console.log('Badge closed')} className="text-yellow-700 bg-yellow-300 mr-2" />
      <NBadge size={BadgeSize.LG} name="Sample" onClose={() => console.log('Badge closed')} className="text-red-700 bg-red-300 mr-2" />
    </>
  );
};

export default BadgeExample;

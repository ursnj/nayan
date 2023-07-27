import { NBadge } from '@/components/NBadge';
import { Size } from '@/components/Types';

const BadgeExample = () => {
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="text-text mb-3 text-lg text-left">Badge:</h1>
      <NBadge size={Size.XS} name="Sample" className="text-text bg-card border border-border mr-2" />
      <NBadge size={Size.XS} name="Sample" className="text-blue-700 bg-blue-300 mr-2" />
      <NBadge size={Size.SM} name="Sample" className="text-green-700 bg-green-300 mr-2" />
      <NBadge size={Size.MD} name="Sample" className="text-yellow-700 bg-yellow-300 mr-2" />
      <NBadge size={Size.LG} name="Sample" className="text-red-700 bg-red-300 mr-2" />
    </div>
  );
};

export default BadgeExample;

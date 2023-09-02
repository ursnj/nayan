import { NCard } from '@/components/NCard';
import { NProgress } from '@/components/NProgress';

const ProgressExample = () => {
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="text-text mb-3 text-lg">Progress:</h1>
      <NProgress value={50} />
    </div>
  );
};

export default ProgressExample;

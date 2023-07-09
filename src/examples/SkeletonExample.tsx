import { NSkeleton } from '@/components/NSkeleton';

const SkeletonExample = () => {
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="nyn-text mb-3 text-lg">Skeleton:</h1>
      <div className="flex items-center space-x-4">
        <NSkeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <NSkeleton className="h-4 w-[250px]" />
          <NSkeleton className="h-4 w-[180px]" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonExample;

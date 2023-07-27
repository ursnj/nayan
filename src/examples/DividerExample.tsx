import { NDivider } from '@/components/NDivider';

const DividerExample = () => {
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="text-text mb-3 text-lg">Divider Horizontal:</h1>
      <NDivider className="my-3" />
      <h1 className="text-text mb-3 text-lg">Divider Vertical:</h1>
      <NDivider orientation="vertical" className="h-5" />
    </div>
  );
};

export default DividerExample;

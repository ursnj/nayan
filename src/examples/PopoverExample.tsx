import { NPopover } from '@/components/NPopover';
import { Size } from '@/components/Types';

const PopoverExample = () => {
  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text text-lg text-left">Popover:</h1>
      <NPopover size={Size.MD} trigger={<div className="text-sm font-medium nyn-text-primary">Show Popover</div>}>
        <div className="overflow-hidden p-3">
          <div className="text-sm font-medium nyn-text">Documentation</div>
          <div className="text-sm nyn-text-muted">Start integrating products and tools</div>
        </div>
      </NPopover>
    </div>
  );
};

export default PopoverExample;

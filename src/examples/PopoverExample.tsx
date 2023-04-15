import { NPopover } from '../components/NPopover';
import { NButton } from '../components/NButton';

const PopoverExample = () => {
  return (
    <div className="my-10 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Popover:</h1>
      <NPopover trigger={<NButton className="text-sm font-medium text-white bg-primary hover:bg-primary-dark">Open Popup</NButton>}>
        <div className="overflow-hidden p-3">
          <div className="text-sm font-medium nyn-text">Documentation</div>
          <div className="text-sm nyn-text-muted">Start integrating products and tools</div>
        </div>
      </NPopover>
    </div>
  );
};

export default PopoverExample;

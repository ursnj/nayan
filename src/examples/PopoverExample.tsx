import { NJPopover } from '../components/NJPopover';
import { NJButton } from '../components/NJButton';

const PopoverExample = () => {
  return (
    <>
      <h1 className="text mb-3 text-lg text-left">Popover:</h1>
      <NJPopover trigger={<NJButton className="text-sm font-medium text-white bg-blue-500 hover:bg-blue-600" text="Open Popup" />}>
        <div className="overflow-hidden rounded card-background border p-3">
          <div className="text-sm font-medium text">Documentation</div>
          <div className="text-sm text-muted">Start integrating products and tools</div>
        </div>
      </NJPopover>
    </>
  );
};

export default PopoverExample;

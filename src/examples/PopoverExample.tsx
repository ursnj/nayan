import { NJPopover } from '../components/NJPopover';

const PopoverExample = () => {
  return (
    <>
      <h1 className="text mb-3 text-lg text-left">Popover:</h1>
      <NJPopover
        trigger={
          <button type="button" className="rounded card-background px-4 py-2 text-sm font-medium text border">
            Open Popup
          </button>
        }>
        <div className="overflow-hidden rounded shadow-lg card-background border p-3">
          <div className="text-sm font-medium text">Documentation</div>
          <div className="text-sm text-muted">Start integrating products and tools</div>
        </div>
      </NJPopover>
    </>
  );
};

export default PopoverExample;

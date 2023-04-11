import { NJPopover } from '../components/NJPopover';

const PopoverExample = () => {
  return (
    <NJPopover
      trigger={
        <button
          type="button"
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Open Popup
        </button>
      }>
      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="bg-gray-50 p-2">
          <a
            href="##"
            className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
            <span className="flex items-center">
              <span className="text-sm font-medium text-gray-900">Documentation</span>
            </span>
            <span className="block text-sm text-gray-500">Start integrating products and tools</span>
          </a>
        </div>
      </div>
    </NJPopover>
  );
};

export default PopoverExample;

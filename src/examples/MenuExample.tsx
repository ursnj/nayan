import { Menu } from '@headlessui/react';
import { NJMenu } from '../components/NJMenu';

const MenuExample = () => {
  return (
    <NJMenu
      trigger={
        <button
          type="button"
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Open Menu
        </button>
      }>
      <div className="p-1">
        <Menu.Item>
          {({ active }) => (
            <button className={`${active ? 'bg-violet-500 text-white' : ''} text-gray-900 flex w-full items-center rounded-md px-2 py-2 text-sm`}>
              Edit
            </button>
          )}
        </Menu.Item>
      </div>
    </NJMenu>
  );
};

export default MenuExample;

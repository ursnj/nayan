import { Menu } from '@headlessui/react';
import { NJMenu } from '../components/NJMenu';

const MenuExample = () => {
  return (
    <>
      <h1 className="text mb-3 text-lg text-left">Dropdown Menu:</h1>
      <NJMenu
        trigger={
          <button type="button" className="rounded card-background px-4 py-2 text-sm font-medium text border">
            Open Menu
          </button>
        }>
        <div className="p-1">
          <Menu.Item>
            <button className="text flex w-full items-center rounded px-2 py-2 text-sm">Edit</button>
          </Menu.Item>
        </div>
      </NJMenu>
    </>
  );
};

export default MenuExample;

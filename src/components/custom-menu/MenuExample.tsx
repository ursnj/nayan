import { Menu } from '@headlessui/react'
import {EllipsisVerticalIcon, HeartIcon} from "@heroicons/react/20/solid";
import CustomMenu from "./CustomMenu";

const MenuExample = () => {
  return (
    <CustomMenu trigger={<EllipsisVerticalIcon className="menu-icon"/>}>
      <div className="p-1">
        <Menu.Item>
          {({ active }) => (
            <button className={`${active ? 'bg-violet-500 text-white' : ''} menu-item`}>
              <HeartIcon className="mr-2 h-5 w-5" aria-hidden="true"/>Edit
            </button>
          )}
        </Menu.Item>
      </div>
    </CustomMenu>
  );
};

export default MenuExample;

import { NMenu } from '../components/NMenu';
import { NMenuItem } from '../components/NMenuItem';
import { NDivider } from '../components/NDivider';
import { NButton } from '../components/NButton';
import { Size } from '../components/Types';

const MenuExample = () => {
  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Dropdown Menu:</h1>
      <NMenu
        size={Size.MD}
        position="right"
        trigger={<NButton className="text-sm font-medium text-white bg-red-500 hover:bg-red-600">Open Menu</NButton>}>
        <>
          <NMenuItem>
            <button className="nyn-text flex w-full items-center rounded px-3 py-2 text-sm">Edit</button>
          </NMenuItem>
          <NDivider />
          <NMenuItem>
            <button className="flex w-full items-center rounded px-3 py-2 text-sm text-red-500">Delete</button>
          </NMenuItem>
        </>
      </NMenu>
    </div>
  );
};

export default MenuExample;

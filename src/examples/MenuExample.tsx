import { NMenu } from '../components/NMenu';
import { NMenuItem } from '../components/NMenuItem';
import { NDivider } from '../components/NDivider';
import { NButton } from '../components/NButton';

const MenuExample = () => {
  return (
    <>
      <h1 className="text mb-3 text-lg text-left">Dropdown Menu:</h1>
      <NMenu trigger={<NButton className="text-sm font-medium text-white bg-red-500 hover:bg-red-600" text="Open Menu" />}>
        <>
          <NMenuItem>
            <button className="text flex w-full items-center rounded px-3 py-2 text-sm">Edit</button>
          </NMenuItem>
          <NDivider />
          <NMenuItem>
            <button className="flex w-full items-center rounded px-3 py-2 text-sm text-red-500">Delete</button>
          </NMenuItem>
        </>
      </NMenu>
    </>
  );
};

export default MenuExample;

import { NJMenu } from '../components/NJMenu';
import { NJMenuItem } from '../components/NJMenuItem';
import { NJDivider } from '../components/NJDivider';

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
        <>
          <NJMenuItem>
            <button className="text flex w-full items-center rounded px-3 py-2 text-sm">Edit</button>
          </NJMenuItem>
          <NJDivider />
          <NJMenuItem>
            <button className="flex w-full items-center rounded px-3 py-2 text-sm text-red-500">Delete</button>
          </NJMenuItem>
        </>
      </NJMenu>
    </>
  );
};

export default MenuExample;

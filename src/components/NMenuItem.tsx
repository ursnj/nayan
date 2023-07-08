import { DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut } from '@/components/ui/dropdown-menu';

interface Props {
  title: string;
  shortcut?: string;
  icon?: any;
  separator?: boolean;
}

export const NMenuItem = (props: Props) => {
  const { title, shortcut = '', separator = false } = props;
  const Icon = props.icon;

  return (
    <>
      <DropdownMenuItem>
        {props.icon && <Icon className="mr-2 h-4 w-4" />}
        <span>{title}</span>
        {shortcut && <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>}
      </DropdownMenuItem>
      {separator && <DropdownMenuSeparator />}
    </>
  );
};

import { DropdownMenuItem, DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import { NDivider } from '@/components/NDivider';

interface Props {
  title: string;
  shortcut?: string;
  icon?: any;
  separator?: boolean;
  className?: string;
  onClick?: () => void;
}

export const NMenuItem = (props: Props) => {
  const { title, shortcut = '', separator = false, className = '' } = props;
  const Icon = props.icon;

  return (
    <>
      <DropdownMenuItem className={`nyn-menu-item nyn-text hover:nyn-background-border ${className}`} onClick={props.onClick}>
        {props.icon && <Icon className="mr-2 h-4 w-4" />}
        <span>{title}</span>
        {shortcut && <DropdownMenuShortcut className="nyn-text-muted">⇧⌘P</DropdownMenuShortcut>}
      </DropdownMenuItem>
      {separator && <NDivider />}
    </>
  );
};

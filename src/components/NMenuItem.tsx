import { DropdownMenuItem, DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import { NDivider } from '@/components/NDivider';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  shortcut?: string;
  icon?: any;
  separator?: boolean;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  shortcutClassName?: string;
  onClick?: () => void;
}

export const NMenuItem = (props: Props) => {
  const { title, shortcut = '', separator = false, className = '', titleClassName = '', iconClassName = '', shortcutClassName = '' } = props;
  const Icon = props.icon;

  return (
    <>
      <DropdownMenuItem
        className={cn(`nyn-menu-item text-text hover:bg-border focus:bg-border active:bg-border cursor-pointer py-2 ${className}`)}
        onClick={props.onClick}>
        {props.icon && <Icon className={cn(`mr-2 h-4 w-4 ${iconClassName}`)} />}
        <span className={titleClassName}>{title}</span>
        {shortcut && <DropdownMenuShortcut className={cn(`text-muted ${shortcutClassName}`)}>⇧⌘P</DropdownMenuShortcut>}
      </DropdownMenuItem>
      {separator && <NDivider />}
    </>
  );
};

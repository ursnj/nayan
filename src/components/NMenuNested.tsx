import { ReactNode } from 'react';
import { DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from '@/components/ui/dropdown-menu';
import { Size } from '@/components/Types';
import { menuSizeMapping } from '@/components/NMenu';

interface Props {
  size?: Size;
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
}

export const NMenuNested = (props: Props) => {
  const { trigger, children, className = '', size = Size.MD } = props;
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className={`nyn-menu-nested-trigger nyn-text-muted ${className}`}>{trigger}</DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent className={`nyn-menu-nested-content rounded nyn-background-card nyn-border shadow-lg ${menuSizeMapping[size]}`}>
          {children}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

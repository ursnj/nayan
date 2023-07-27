import { ReactNode } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Size } from '@/components/Types';

const sizeMapping = {
  [Size.XS]: 'md:max-w-sm',
  [Size.SM]: 'md:max-w-lg',
  [Size.MD]: 'md:max-w-2xl',
  [Size.LG]: 'md:max-w-4xl'
};

interface Props {
  isOpen: boolean;
  title: string;
  size?: Size;
  className?: string;
  children: ReactNode;
  onCloseSheet: () => void;
}

export const NSheet = (props: Props) => {
  const { isOpen, className = '', title, children, size = Size.XS } = props;

  return (
    <Sheet open={isOpen} onOpenChange={props.onCloseSheet}>
      <SheetContent
        className={`nyn-sheet p-0 gap-0 border-0 border-l border-border bg-background text-white overflow-hidden w-full ${sizeMapping[size]} ${className}`}>
        <SheetHeader className="nyn-sheet-header px-3 py-2.5 bg-primary text-white">
          <SheetTitle className="nyn-sheet-title text-base font-normal">{title}</SheetTitle>
        </SheetHeader>
        <div className="nyn-sheet-content text-text overflow-y-auto">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

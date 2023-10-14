import { ReactNode } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { SheetSize } from '@/components/Types';

const sizeMapping = {
  [SheetSize.XS]: 'md:max-w-sm',
  [SheetSize.SM]: 'md:max-w-lg',
  [SheetSize.MD]: 'md:max-w-2xl',
  [SheetSize.LG]: 'md:max-w-4xl'
};

interface Props {
  isOpen: boolean;
  title: string;
  size?: SheetSize;
  className?: string;
  children: ReactNode;
  onCloseSheet: () => void;
}

export const NSheet = (props: Props) => {
  const { isOpen, className = '', title, children, size = SheetSize.XS } = props;

  return (
    <Sheet open={isOpen} onOpenChange={props.onCloseSheet}>
      <SheetContent
        className={`nyn-sheet p-0 gap-0 border-0 border-l border-border bg-card text-white overflow-hidden w-full ${sizeMapping[size]} ${className}`}>
        <SheetHeader className="nyn-sheet-header px-3 py-2.5 bg-primary text-white">
          <SheetTitle className="nyn-sheet-title text-base font-normal">{title}</SheetTitle>
        </SheetHeader>
        <div className="nyn-sheet-content text-text h-[calc(100vh_-_44px)] overflow-y-auto">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

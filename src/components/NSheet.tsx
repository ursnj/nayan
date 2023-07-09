import { ReactNode } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Size } from '@/components/Types';

const sizeMapping = {
  [Size.XS]: 'md:max-w-sm',
  [Size.SM]: 'md:max-w-lg',
  [Size.MD]: 'md:max-w-2xl',
  [Size.LG]: 'md:max-w-4xl'
};

interface Props {
  size?: Size;
  className?: string;
  title: string;
  trigger: ReactNode;
  children: ReactNode;
}

export const NSheet = (props: Props) => {
  const { className = '', title, trigger, children, size = Size.XS } = props;

  return (
    <Sheet>
      <SheetTrigger className={className}>{trigger}</SheetTrigger>
      <SheetContent className={`nyn-sheet p-0 gap-0 nyn-border nyn-background text-white rounded overflow-hidden w-full ${sizeMapping[size]}`}>
        <SheetHeader className="nyn-sheet-header p-3 nyn-background-primary text-white">
          <SheetTitle className="nyn-sheet-title text-base font-normal">{title}</SheetTitle>
        </SheetHeader>
        <div className="nyn-sheet-content nyn-text overflow-y-auto">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

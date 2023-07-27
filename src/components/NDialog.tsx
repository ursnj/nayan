import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ReactNode } from 'react';
import { Size } from './Types';

interface Props {
  isOpen: boolean;
  title: string;
  size?: Size;
  className?: string;
  children: ReactNode;
  closeModal: () => void;
}

const sizeMapping = {
  [Size.XS]: 'max-w-sm',
  [Size.SM]: 'max-w-lg',
  [Size.MD]: 'max-w-2xl',
  [Size.LG]: 'max-w-4xl'
};

export const NDialog = (props: Props) => {
  const { isOpen, title, children, size = Size.SM, className = '' } = props;
  return (
    <Dialog open={isOpen} onOpenChange={props.closeModal}>
      <DialogContent
        className={`nyn-dialog p-0 gap-0 nyn-border nyn-background text-white rounded overflow-hidden ${sizeMapping[size]} ${className}`}>
        <DialogHeader className="nyn-dialog-header p-3 nyn-background-primary text-white">
          <DialogTitle className="nyn-dialog-title text-base font-normal">{title}</DialogTitle>
        </DialogHeader>
        <div className="nyn-dialog-content nyn-text min-h-[300px] max-h-[calc(100vh_-_75px)] overflow-y-auto">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

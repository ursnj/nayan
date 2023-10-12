import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ReactNode } from 'react';
import { DialogSize } from './Types';

const sizeMapping = {
  [DialogSize.XS]: 'max-w-sm',
  [DialogSize.SM]: 'max-w-lg',
  [DialogSize.MD]: 'max-w-2xl',
  [DialogSize.LG]: 'max-w-4xl'
};

interface Props {
  isOpen: boolean;
  title: string;
  size?: DialogSize;
  className?: string;
  children: ReactNode;
  onClose: () => void;
}

export const NDialog = (props: Props) => {
  const { isOpen, title, children, size = DialogSize.SM, className = '' } = props;

  return (
    <Dialog open={isOpen} onOpenChange={props.onClose}>
      <DialogContent
        className={`nyn-dialog p-0 gap-0 border border-border bg-card text-white rounded overflow-hidden ${sizeMapping[size]} ${className}`}>
        <DialogHeader className="nyn-dialog-header px-3 py-2.5 bg-primary text-white">
          <DialogTitle className="nyn-dialog-title text-base font-normal">{title}</DialogTitle>
        </DialogHeader>
        <div className="nyn-dialog-content text-text h-[calc(100vh_-_140px)] sm:h-auto sm:min-h-[350px] sm:max-h-[calc(100vh_-_75px)] overflow-y-auto">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

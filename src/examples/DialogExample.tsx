import { NDialog } from '../components/NDialog';
import { useState } from 'react';
import { Size } from '../components/Types';

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Dialog:</h1>
      <div className="text-sm font-medium text-green-600" onClick={() => setIsOpen(true)}>
        Open Dialog
      </div>
      <NDialog size={Size.SM} isOpen={isOpen} isDismissable={true} title="Payment confirmation" closeModal={() => setIsOpen(false)}>
        <div className="p-3 w-full h-full">
          <p className="text-sm nyn-text">
            Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
          </p>
        </div>
      </NDialog>
    </div>
  );
};

export default DialogExample;

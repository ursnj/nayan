import { NDialog } from '../components/NDialog';
import { useState } from 'react';
import { NButton } from '../components/NButton';

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Dialog:</h1>
      <NDialog
        trigger={
          <NButton className="text-sm font-medium text-white bg-green-500 hover:bg-green-600" onClick={() => setIsOpen(true)}>
            Open Dialog
          </NButton>
        }
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}>
        <div className="mt-2">
          <p className="text-sm nyn-text">
            Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
          </p>
        </div>
      </NDialog>
    </div>
  );
};

export default DialogExample;

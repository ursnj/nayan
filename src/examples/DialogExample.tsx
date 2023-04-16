import { NDialog } from '../components/NDialog';
import { useState } from 'react';
import { NButton } from '../components/NButton';

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Dialog:</h1>
      <NDialog
        isOpen={isOpen}
        isDismissable={true}
        title="Payment confirmation"
        closeModal={() => setIsOpen(false)}
        trigger={
          <NButton className="text-sm font-medium text-white bg-green-500 hover:bg-green-600" onClick={() => setIsOpen(true)}>
            Open Dialog
          </NButton>
        }>
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

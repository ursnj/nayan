import { NJDialog } from '../components/NJDialog';
import { useState } from 'react';

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1 className="text mb-3 text-lg text-left">Dialog:</h1>
      <NJDialog
        trigger={
          <button type="button" className="rounded card-background px-4 py-2 text-sm font-medium text border" onClick={() => setIsOpen(true)}>
            Open Dialog
          </button>
        }
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}>
        <div className="mt-2">
          <p className="text-sm text">Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.</p>
        </div>
      </NJDialog>
    </>
  );
};

export default DialogExample;

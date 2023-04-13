import { NJDialog } from '../components/NJDialog';
import { useState } from 'react';
import { NJButton } from '../components/NJButton';

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1 className="text mb-3 text-lg text-left">Dialog:</h1>
      <NJDialog
        trigger={
          <NJButton className="text-sm font-medium text-white bg-green-500 hover:bg-green-600" text="Open Dialog" onClick={() => setIsOpen(true)} />
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

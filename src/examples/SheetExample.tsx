import { useState } from 'react';
import { NSheet } from '@/components/NSheet';
import { Size } from '@/components/Types';

const SheetExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="text-text mb-3 text-lg text-left">Sheet:</h1>
      <div className="text-sm font-medium text-green-600" onClick={() => setIsOpen(true)}>
        Show Sheet
      </div>
      <NSheet isOpen={isOpen} size={Size.SM} title="Edit Profile" onCloseSheet={() => setIsOpen(false)}>
        <div className="w-full h-full p-3">
          <p className="text-sm text-text h-screen">
            Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
          </p>
        </div>
      </NSheet>
    </div>
  );
};

export default SheetExample;

import { useState } from 'react';
import { NConfirmAlert } from '@/components/NConfirmAlert';

const ConfirmAlertExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="text-text mb-3 text-lg text-left">Confirm Alert:</h1>
      <NConfirmAlert
        isOpen={isOpen}
        title="Are you absolutely sure?"
        message="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        onConfirmClick={() => console.log('Confirm Clicked')}
        onCancelClick={() => console.log('Cancel clicked')}
        onCloseAlert={() => setIsOpen(false)}
      />
      <div className="text-sm font-medium text-pink-600" onClick={() => setIsOpen(true)}>
        Show Alert
      </div>
    </div>
  );
};

export default ConfirmAlertExample;

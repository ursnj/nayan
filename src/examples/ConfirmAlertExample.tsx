import { NConfirmAlert } from '@/components/NConfirmAlert';

const ConfirmAlertExample = () => {
  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Confirm Alert:</h1>
      <NConfirmAlert
        title="Are you absolutely sure?"
        message="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        trigger={<div className="text-sm font-medium text-pink-600">Confirm Alert</div>}
        onConfirmClick={() => console.log('Confirm Clicked')}
        onCancelClick={() => console.log('Cancel clicked')}
      />
    </div>
  );
};

export default ConfirmAlertExample;

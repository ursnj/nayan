import { NSheet } from '../components/NSheet';
import { NDialog } from '@/components/NDialog';
import { Size } from '@/components/Types';

const SheetExample = () => {
  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Sheet:</h1>
      <NSheet size={Size.SM} title="Edit Profile" trigger={<div className="text-sm font-medium text-green-600">Show Sheet</div>}>
        <div className="w-full h-full p-3">
          <p className="text-sm nyn-text">
            Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
          </p>
        </div>
      </NSheet>
    </div>
  );
};

export default SheetExample;

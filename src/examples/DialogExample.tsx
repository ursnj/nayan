import {NJDialog} from "../components/NJDialog";
import {useState} from "react";

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NJDialog trigger={<button
      type="button"
      onClick={() => setIsOpen(true)}
      className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Open dialog
    </button>} isOpen={isOpen} closeModal={() => setIsOpen(false)}>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          Your payment has been successfully submitted. We’ve sent
          you an email with all of the details of your order.
        </p>
      </div>
    </NJDialog>
  );
};

export default DialogExample;

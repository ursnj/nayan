import {Dialog } from '@headlessui/react'
import CustomDialog from "./CustomDialog";
import {useState} from "react";

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CustomDialog trigger={<button
      type="button"
      onClick={() => setIsOpen(true)}
      className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Open dialog
    </button>} isOpen={isOpen} closeModal={() => setIsOpen(false)}>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Payment successful
      </Dialog.Title>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          Your payment has been successfully submitted. We’ve sent
          you an email with all of the details of your order.
        </p>
      </div>

      <div className="mt-4">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={() => setIsOpen(false)}
        >
          Got it, thanks!
        </button>
      </div>
    </CustomDialog>
  );
};

export default DialogExample;

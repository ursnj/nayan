import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  trigger: ReactNode;
  children: ReactNode;
  closeModal: () => void;
}

export const NDialog = (props: Props) => {
  const { trigger, children, isOpen, closeModal } = props;
  return (
    <>
      <div className="">{trigger}</div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 nyn-background-overlay" />
          </Transition.Child>

          <div className="nyn-dialog fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-3 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="nyn-dialog-panel w-full max-w-lg max-h-[500px] transform overflow-hidden rounded nyn-background-card nyn-border p-6 text-left align-middle transition-all shadow-lg">
                  <Dialog.Title as="h3" className="nyn-dialog-title text-lg font-medium leading-6 nyn-text">
                    Payment successful
                  </Dialog.Title>
                  <div className="nyn-dialog-content w-full h-full overflow-y-auto">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

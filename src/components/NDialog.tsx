import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { CloseIcon } from './Icons';
import { Size } from './Types';

interface Props {
  size?: Size;
  title: string;
  isOpen: boolean;
  isDismissable?: boolean;
  children: ReactNode;
  closeModal: () => void;
}

const sizeMapping = {
  [Size.XS]: 'max-w-sm',
  [Size.SM]: 'max-w-lg',
  [Size.MD]: 'max-w-2xl',
  [Size.LG]: 'max-w-4xl'
};

export const NDialog = (props: Props) => {
  const { title, children, isOpen, closeModal, size = Size.SM, isDismissable = true } = props;
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={isDismissable ? closeModal : () => undefined}>
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
              <Dialog.Panel
                className={`nyn-dialog-panel w-full ${sizeMapping[size]} transform overflow-hidden rounded nyn-background-card nyn-border text-left align-middle transition-all shadow-lg`}>
                <div className="flex flex-row justify-between items-center py-2 px-3">
                  <Dialog.Title as="div" className="nyn-dialog-title text-base font-medium leading-6 nyn-text">
                    {title}
                  </Dialog.Title>
                  <span className="cursor-pointer" onClick={closeModal}>
                    <CloseIcon className="w-5 h-5 nyn-text" />
                  </span>
                </div>
                <div className="nyn-dialog-content w-full h-full min-h-100 max-h-600">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

import { Listbox, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { ChevronUpDownIcon } from './Icons';

interface Props {
  children: ReactNode;
  selected: any;
  onSelected: (val: any) => void;
}

export const NJSelect = (props: Props) => {
  const { selected, children } = props;
  return (
    <Listbox value={selected} onChange={props.onSelected} multiple={Array.isArray(selected)}>
      <div className="relative">
        <Listbox.Button className="relative w-full cursor-default rounded card-background border py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate text">{Array.isArray(selected) ? selected.length + ' selected' : selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-muted" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute mt-1 max-h-60 w-full z-10 overflow-auto rounded card-background border py-1 text-base shadow-lg">
            {children}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

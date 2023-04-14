import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CheckIcon, ChevronUpDownIcon } from './Icons';

interface Props {
  items: any;
  selected: any;
  onSelected: (val: any) => void;
}

export const NSelect = (props: Props) => {
  const { selected, items } = props;
  return (
    <Listbox value={selected} onChange={props.onSelected} multiple={Array.isArray(selected)}>
      <div className="relative">
        <Listbox.Button className="nyn-select-trigger relative w-full cursor-pointer rounded card-background border py-2 pl-3 pr-10 text-left sm:text-sm">
          <span className="nyn-select-text block truncate text">{Array.isArray(selected) ? selected.length + ' selected' : selected.label}</span>
          <span className="nyn-select-icon pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-muted" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="nyn-select-options absolute mt-1 max-h-60 w-full z-10 overflow-auto rounded card-background border py-1">
            {items.map((item: any) => (
              <Listbox.Option
                key={item.id}
                value={item}
                disabled={!!item.disable}
                className={({ active }) =>
                  `njn-select-option relative cursor-default select-none py-2 pl-10 pr-4 ${
                    !!item.disable ? 'text-muted cursor-not-allowed' : 'text cursor-pointer'
                  } ${active ? 'background-muted' : ''}`
                }>
                {({ selected }) => (
                  <>
                    <span className={`njn-select-option-text block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{item.label}</span>
                    {selected ? (
                      <span className="nyn-select-option-icon absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

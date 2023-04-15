import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from './Icons';

interface Props {
  title: string;
  text: string;
}

export const NDisclosure = (props: Props) => {
  const { title, text } = props;

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="nyn-disclosure flex w-full justify-between px-3 py-2 text-left text-sm">
            <span className="nyn-disclosure-title nyn-text">{title}</span>
            <ChevronUpIcon className={`nyn-disclosure-icon ${open ? 'rotate-0 transform' : 'rotate-180'} h-5 w-5 nyn-text-muted`} />
          </Disclosure.Button>
          <Disclosure.Panel className="nyn-disclosure-content px-3 py-2 text-sm nyn-text-muted">{text}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from './Icons';

interface Props {
  title: string;
  text: string;
}

export const NJDisclosure = (props: Props) => {
  const { title, text } = props;

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm text card-background border">
            <span>{title}</span>
            <ChevronUpIcon className={`${open ? 'rotate-0 transform' : 'rotate-180'} h-5 w-5 text`} />
          </Disclosure.Button>
          <Disclosure.Panel className="p-2 text-sm text-muted">{text}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

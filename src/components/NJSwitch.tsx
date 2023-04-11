import { Switch } from '@headlessui/react';

interface Props {
  label: string;
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
}

export const NJSwitch = (props: Props) => {
  const { label, enabled, setEnabled } = props;

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'background-primary' : 'bg-gray-400'}
          relative inline-flex h-[28px] w-[52px] shrink-0 cursor-pointer rounded-full border transition-colors duration-200 ease-in-out p-[1px]`}>
      <span className="sr-only">{label}</span>
      <span
        aria-hidden="true"
        className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full card-background shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
};

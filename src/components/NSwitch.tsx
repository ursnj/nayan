import { Switch } from '@headlessui/react';

interface Props {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
}

export const NSwitch = (props: Props) => {
  const { enabled, setEnabled } = props;

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`nyn-switch ${enabled ? 'active nyn-background-primary' : 'inactive bg-gray-400'}
          relative inline-flex h-[28px] w-[52px] shrink-0 cursor-pointer rounded-full nyn-border transition-colors duration-200 ease-in-out p-[1px]`}>
      <span
        aria-hidden="true"
        className={`nyn-switch-knob ${enabled ? 'active translate-x-6' : 'inactive translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full nyn-background-card ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
};

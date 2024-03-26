import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface Props {
  enabled: boolean;
  label?: string;
  className?: string;
  labelClassName?: string;
  switchClassName?: string;
  disabled?: boolean;
  onChange: (enabled: boolean) => void;
}

export const NSwitch = (props: Props) => {
  const { label, enabled, disabled = false, onChange, className = '', switchClassName = '', labelClassName = '' } = props;

  return (
    <div className={`flex items-center justify-between ${className}`}>
      {label && (
        <Label htmlFor="airplane-mode" className={`nyn-switch-label text-text leading-relaxed pr-3 ${labelClassName}`}>
          {label}
        </Label>
      )}
      <Switch
        id="airplane-mode"
        checked={enabled}
        disabled={disabled}
        onCheckedChange={onChange}
        className={`nyn-switch data-[state=checked]:border-primary data-[state=unchecked]:border-border data-[state=checked]:bg-primary data-[state=unchecked]:bg-border ${switchClassName}`}
      />
    </div>
  );
};

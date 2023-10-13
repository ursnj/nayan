import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface Props {
  enabled: boolean;
  label?: string;
  className?: string;
  disabled?: boolean;
  onChange: (enabled: boolean) => void;
}

export const NSwitch = (props: Props) => {
  const { label, enabled, disabled = false, onChange, className = '' } = props;

  return (
    <div className="flex items-center justify-between">
      {label && (
        <Label htmlFor="airplane-mode" className="nyn-switch-label text-text pr-3">
          {label}
        </Label>
      )}
      <Switch
        id="airplane-mode"
        checked={enabled}
        disabled={disabled}
        onCheckedChange={onChange}
        className={`nyn-switch data-[state=checked]:border-primary data-[state=unchecked]:border-border data-[state=checked]:bg-primary data-[state=unchecked]:bg-border ${className}`}
      />
    </div>
  );
};

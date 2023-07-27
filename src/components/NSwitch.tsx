import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface Props {
  enabled: boolean;
  label?: string;
  onChange: (enabled: boolean) => void;
}

export const NSwitch = (props: Props) => {
  const { label, enabled, onChange } = props;

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        checked={enabled}
        onCheckedChange={onChange}
        className="data-[state=checked]:border-primary data-[state=unchecked]:border-border data-[state=checked]:bg-primary data-[state=unchecked]:bg-border"
      />
      {label && (
        <Label htmlFor="airplane-mode" className="text-text">
          {label}
        </Label>
      )}
    </div>
  );
};

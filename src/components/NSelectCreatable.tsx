import { Label } from '@/components/ui/label';
import { SelectBoxItem } from '@/components/Types';

interface Props {
  selected: string;
  placeholder: string;
  label?: string;
  title?: string;
  className?: string;
  items: SelectBoxItem[];
  onChange: (selected: string) => void;
}

export const NSelectCreatable = (props: Props) => {
  const { className = '', placeholder, title = '', label = '', items, selected } = props;
  return (
    <div className={`nyn-select-block ${className}`}>
      {label && (
        <Label htmlFor="select" className="nyn-input-label block pb-2 text-text">
          {label}
        </Label>
      )}

    </div>
  );
};

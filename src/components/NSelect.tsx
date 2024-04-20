import { Label } from '@/components/ui/label';
import { ReactSelectOption } from '@/components/Types';
import Select, { ActionMeta, OnChangeValue } from 'react-select';
import { cn } from '../lib/utils';
import { reactSelectCustomClassNames, reactSelectTheme } from './Utils';

interface Props {
  isMulti?: boolean;
  label?: string;
  placeholder?: string;
  isLoading?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  className?: string;
  labelClassName?: string;
  selectClassName?: string;
  value: ReactSelectOption | ReactSelectOption[] | any;
  options: ReactSelectOption[] | any;
  onChangeOptions: (values: ReactSelectOption[]) => void;
}

export const NSelect = (props: Props) => {
  const d: any = typeof document !== 'undefined' ? document : {};
  const {
    options,
    value,
    label,
    isMulti = false,
    isLoading = false,
    placeholder = 'Select...',
    isSearchable = false,
    isClearable = false,
    isDisabled = false,
    className = '',
    labelClassName = '',
    selectClassName = ''
  } = props;

  const handleChange = (values: OnChangeValue<ReactSelectOption, true>, actionMeta: ActionMeta<ReactSelectOption>) => {
    props.onChangeOptions(values as any);
  };

  return (
    <div className={cn(`nyn-select-block mb-3 ${className}`)}>
      {label && (
        <Label htmlFor="select" className={cn(`nyn-select-label block pb-2 text-text ${labelClassName}`)}>
          {label}
        </Label>
      )}
      <Select
        isMulti={isMulti as any}
        isLoading={isLoading}
        isDisabled={isDisabled}
        isClearable={isClearable}
        isSearchable={isSearchable}
        className={cn(`nyn-select ${selectClassName}`)}
        placeholder={placeholder}
        classNamePrefix="nyn-select"
        value={value}
        options={options}
        classNames={reactSelectCustomClassNames}
        onChange={handleChange}
        theme={reactSelectTheme}
        menuPortalTarget={d.body}
      />
    </div>
  );
};

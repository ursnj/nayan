import { Label } from '@/components/ui/label';
import { ReactSelectOption } from '@/components/Types';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { cn } from '../lib/utils';
import { reactSelectCustomClassNames, reactSelectTheme } from './Utils';

interface Props {
  isMulti?: boolean;
  label?: string;
  placeholder?: string;
  isLoading?: boolean;
  isCreatable?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  className?: string;
  labelClassName?: string;
  selectClassName?: string;
  value: ReactSelectOption | ReactSelectOption[] | any;
  options: ReactSelectOption[] | any;
  onCreateOptions?: (value: string) => void;
  onChangeOptions?: (values: ReactSelectOption[]) => void;
}

export const NSelect = (props: Props) => {
  const d: any = typeof document !== 'undefined' ? document : {};
  const {
    options,
    value,
    label,
    isMulti = false,
    isLoading = false,
    isCreatable = false,
    placeholder = 'Select...',
    isSearchable = false,
    isClearable = false,
    isDisabled = false,
    className = '',
    labelClassName = '',
    selectClassName = ''
  } = props;

  const handleChange = (values: any[]) => {
    props.onChangeOptions && props.onChangeOptions(values as any);
  };

  const handleCreate = (value: string) => {
    props.onCreateOptions && props.onCreateOptions(value);
  };

  return (
    <div className={cn(`nyn-select-block mb-3 ${className}`)}>
      {label && (
        <Label htmlFor="select" className={cn(`nyn-select-label block pb-2 text-text ${labelClassName}`)}>
          {label}
        </Label>
      )}
      {!isCreatable && (
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
      )}
      {!!isCreatable && (
        <CreatableSelect
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
          onCreateOption={handleCreate}
          onChange={handleChange}
          theme={reactSelectTheme}
          menuPortalTarget={d.body}
        />
      )}
    </div>
  );
};

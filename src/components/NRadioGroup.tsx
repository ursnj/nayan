import { RadioGroup } from '@headlessui/react';

interface Props {
  isVertical?: boolean;
  items: { id: string; label: string }[];
  selected: { id: string; label: string };
  setSelected: (item: { id: string; label: string }) => void;
}

export const NRadioGroup = (props: Props) => {
  const { isVertical = false, items, selected, setSelected } = props;

  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      className={`nyn-radio-group grid ${isVertical ? 'grid-flow-row' : 'grid-flow-col'} justify-stretch`}>
      {items.map(item => (
        <RadioGroup.Option key={item.id} value={item}>
          {({ checked }) => (
            <div
              className={`nyn-radio-group-option ${
                checked ? 'background-primary text-white' : 'card-background text'
              } p-2 cursor-pointer w-full text-center first:rounded rounded border`}>
              {item.label}
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

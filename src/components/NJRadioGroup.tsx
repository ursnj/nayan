import { RadioGroup } from '@headlessui/react';

interface Props {
  isVertical?: boolean;
  items: { id: string; label: string }[];
  selected: { id: string; label: string };
  setSelected: (item: { id: string; label: string }) => void;
}

export const NJRadioGroup = (props: Props) => {
  const { isVertical = false, items, selected, setSelected } = props;

  return (
    <RadioGroup value={selected} onChange={setSelected} className={`grid ${isVertical ? 'grid-flow-row' : 'grid-flow-col'} justify-stretch gap-2.5`}>
      {items.map(item => (
        <RadioGroup.Option key={item.id} value={item}>
          {({ checked }) => (
            <div
              className={`${
                checked ? 'background-primary text-white' : 'card-background text'
              } border p-2 cursor-pointer w-full text-center rounded`}>
              {item.label}
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

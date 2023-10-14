import { ReactNode } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Props {
  isFull?: boolean;
  items: string[];
  children: ReactNode;
  selected: string;
  className?: string;
  onChange: (selected: string) => void;
}

export const NTabs = (props: Props) => {
  const { isFull = false, items, selected, children, className = '' } = props;

  const isActive = (tab: string) => selected === tab;

  return (
    <Tabs defaultValue={selected} value={selected} onValueChange={props.onChange} className="w-full">
      <TabsList
        className={`nyn-tabs bg-transparent border-0 border-b border-border  p-0 rounded-none ${
          isFull ? 'grid grid-flow-col justify-stretch' : 'flex flex-row justify-start'
        } ${className}`}>
        {items.map((item: string) => (
          <TabsTrigger
            key={item}
            value={item}
            className={`h-full border-0 border-b-4 ${isActive(item) ? 'text-primary border-primary' : 'text-text border-transparent'}`}>
            {item}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
};

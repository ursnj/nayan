import { ReactNode } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Props {
  isFull?: boolean;
  tabs: string[];
  selected: string;
  children: ReactNode;
  setSelected?: (selected: string) => void;
}

export const NTabs = (props: Props) => {
  const { isFull = false, tabs, selected, children } = props;

  const isActive = (tab: string) => selected === tab;

  return (
    <Tabs defaultValue={selected} value={selected} onValueChange={props.setSelected} className="w-full">
      <TabsList
        className={`nyn-tabs bg-transparent border-0 border-b border-border  p-0 rounded-none ${
          isFull ? 'grid grid-flow-col justify-stretch' : 'flex flex-row justify-start'
        }`}>
        {tabs.map((tab: string) => (
          <TabsTrigger
            key={tab}
            value={tab}
            className={`h-full border-0 border-b-4 ${isActive(tab) ? 'text-primary border-primary' : 'text-text border-transparent'}`}>
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
};

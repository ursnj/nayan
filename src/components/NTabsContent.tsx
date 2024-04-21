import { ReactNode } from 'react';
import { TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface Props {
  item: string;
  className?: string;
  children: ReactNode;
}

export const NTabsContent = (props: Props) => {
  const { item, className = '' } = props;

  return (
    <TabsContent value={item} className={cn(`nyn-tab-content ${className}`)}>
      {props.children}
    </TabsContent>
  );
};

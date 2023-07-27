import { ReactNode } from 'react';
import { TabsContent } from '@/components/ui/tabs';

interface Props {
  tab: string;
  className?: string;
  children: ReactNode;
}

export const NTabsContent = (props: Props) => {
  const { tab, className = '' } = props;

  return (
    <TabsContent value={tab} className={`nyn-tab-content ${className}`}>
      {props.children}
    </TabsContent>
  );
};

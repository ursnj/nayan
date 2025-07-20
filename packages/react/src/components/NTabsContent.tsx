import { ReactNode } from 'react';
import { TabsContent } from './ui/tabs';
import { cn } from '../lib/utils';

export interface NTabsContentProps {
  item: string;
  className?: string;
  children: ReactNode;
}

export const NTabsContent = ({ item, className = '', children }: NTabsContentProps) => (
  <TabsContent value={item} className={cn('nyn-tab-content', className)}>
    {children}
  </TabsContent>
);

NTabsContent.displayName = 'NTabsContent';

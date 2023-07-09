import { ReactNode, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

interface Props {
  theme: string | null;
  children: ReactNode;
}

export const NTheme = (props: Props) => {
  const { children, theme } = props;

  useEffect(() => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const finalTheme = !theme || !defaultDark ? 'light' : theme || 'dark';
    document.documentElement.setAttribute('data-theme', finalTheme);
  }, [theme]);

  return (
    <TooltipProvider>
      <main>{children}</main>
      <Toaster />
    </TooltipProvider>
  );
};

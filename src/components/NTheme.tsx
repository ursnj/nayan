import { ReactNode, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { THEMES } from '@/components/Types';

interface Props {
  theme: string | null;
  children: ReactNode;
}

export const NTheme = (props: Props) => {
  const { children, theme } = props;

  useEffect(() => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const finalTheme = !theme || !defaultDark ? THEMES.LIGHT : theme || THEMES.DARK;
    document.documentElement.setAttribute('data-theme', finalTheme);
  }, [theme]);

  return (
    <TooltipProvider>
      <main>{children}</main>
      <Toaster />
    </TooltipProvider>
  );
};

import React, { ReactNode, useEffect, useMemo, HTMLAttributes } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { THEMES } from '@/components/Types';
import { useLocalStorage } from '@/components/NLocalStorage';

export type ThemeType = keyof typeof THEMES | (typeof THEMES)[keyof typeof THEMES] | null;

export interface NThemeProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  theme?: ThemeType;
  children: ReactNode;
  onThemeChange?: (theme: string) => void;
}

export const NTheme = React.memo(({ children, theme = null, onThemeChange, ...mainProps }: NThemeProps) => {
  const [_, setTheme] = useLocalStorage('THEME', '');

  const finalTheme = useMemo(() => {
    if (theme === THEMES.LIGHT || theme === THEMES.DARK) return theme;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return !theme && !prefersDark ? THEMES.LIGHT : theme || THEMES.DARK;
  }, [theme]);

  useEffect(() => {
    setTheme(finalTheme);
    if (typeof window !== 'undefined') {
      window.document.documentElement.style.colorScheme = finalTheme;
      window.document.documentElement.setAttribute('data-theme', finalTheme);
      window.document.documentElement.setAttribute('lang', 'en');
    }
    if (onThemeChange) onThemeChange(finalTheme);
  }, [finalTheme, setTheme, onThemeChange]);

  return (
    <TooltipProvider>
      <main role="main" tabIndex={-1} {...mainProps}>
        {children}
      </main>
      <Toaster />
    </TooltipProvider>
  );
});

NTheme.displayName = 'NTheme';

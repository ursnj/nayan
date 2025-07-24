import React, { useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { vars } from 'nativewind';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NToast } from './NToast';
import { THEMES } from '@/lib/utils';
import { setAndroidNavigationBar } from '@/lib/android-navigation-bar';
import { useNTheme } from '@/hooks/useNTheme';

export interface ThemeConfig {
  light: ReactNavigation.Theme & { colors: ReactNavigation.Theme['colors'] & { muted: string } };
  dark: ReactNavigation.Theme & { colors: ReactNavigation.Theme['colors'] & { muted: string } };
}

export interface NThemeProps {
  children: React.ReactNode;
  theme: string;
  themeColors: ThemeConfig;
}

export const NTheme = React.memo<NThemeProps>(({ children, theme: rawTheme, themeColors }) => {
  const { theme, setTheme, setThemeColors, isDarkMode } = useNTheme();

  useEffect(() => {
    const finalTheme = rawTheme ?? theme ?? THEMES.light;
    setTheme(finalTheme as any);
    setThemeColors(themeColors);
    setAndroidNavigationBar(finalTheme, themeColors);
  }, [rawTheme, theme, themeColors]);

  useEffect(() => {
    if (theme) {
      setAndroidNavigationBar(theme, themeColors);
    }
  }, [theme, themeColors]);

  const themeVars = useMemo(
    () => ({
      light: vars({
        '--color-primary': themeColors.light.colors.primary,
        '--color-background': themeColors.light.colors.background,
        '--color-card': themeColors.light.colors.card,
        '--color-text': themeColors.light.colors.text,
        '--color-muted': themeColors.light.colors.muted,
        '--color-border': themeColors.light.colors.border,
        '--color-notification': themeColors.light.colors.notification
      }),
      dark: vars({
        '--color-primary': themeColors.dark.colors.primary,
        '--color-background': themeColors.dark.colors.background,
        '--color-card': themeColors.dark.colors.card,
        '--color-text': themeColors.dark.colors.text,
        '--color-muted': themeColors.dark.colors.muted,
        '--color-border': themeColors.dark.colors.border,
        '--color-notification': themeColors.dark.colors.notification
      })
    }),
    [themeColors]
  );

  const currentThemeColors = useMemo(() => (isDarkMode ? themeColors.dark : themeColors.light), [isDarkMode, themeColors]);

  return (
    <ThemeProvider value={currentThemeColors}>
      <View className="flex-1" style={themeVars[theme as keyof typeof themeVars]}>
        <StatusBar style={isDarkMode ? THEMES.light : THEMES.dark} />
        <GestureHandlerRootView className="flex-1">
          <SafeAreaProvider>
            <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
            <PortalHost />
            <NToast />
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </View>
    </ThemeProvider>
  );
});

NTheme.displayName = 'NTheme';

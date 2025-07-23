import React, { useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { vars } from 'nativewind';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PortalHost } from '@rn-primitives/portal';
import { NToast } from '@/components/NToast';
import { defaultThemeColors, THEMES } from '@/lib/utils';
import { setAndroidNavigationBar } from '@/lib/android-navigation-bar';
import { useNTheme } from '@/hooks/useNTheme';

export interface ThemeColors {
  primary: string;
  background: string;
  card: string;
  text: string;
  muted: string;
  border: string;
}

export interface ThemeConfig {
  light: { colors: ThemeColors };
  dark: { colors: ThemeColors };
}

export interface NThemeProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  themeColors?: ThemeConfig;
  onThemeChange?: (theme: string) => void;
}

export const NTheme: React.FC<NThemeProps> = ({ children, theme: rawTheme, themeColors, onThemeChange }) => {
  const { theme, setTheme, setThemeColors, isDarkMode } = useNTheme();

  // Use provided theme colors or defaults
  const currentThemeColors = themeColors || defaultThemeColors;

  // Determine final theme
  const finalTheme = rawTheme || theme || THEMES.light;

  // Create theme variables
  const themeVars = useMemo(() => {
    const colors = currentThemeColors[finalTheme === THEMES.dark ? 'dark' : 'light'].colors;

    return vars({
      '--color-primary': colors.primary,
      '--color-background': colors.background,
      '--color-card': colors.card,
      '--color-text': colors.text,
      '--color-muted': colors.muted,
      '--color-border': colors.border
    });
  }, [currentThemeColors, finalTheme]);

  // Initialize theme on mount
  useEffect(() => {
    setTheme(finalTheme as any);
    setThemeColors(currentThemeColors);
    setAndroidNavigationBar(finalTheme, currentThemeColors);
    onThemeChange?.(finalTheme);
  }, [finalTheme, currentThemeColors, onThemeChange, setTheme, setThemeColors]);

  // Update Android navigation bar when theme changes
  useEffect(() => {
    if (theme) {
      setAndroidNavigationBar(theme, currentThemeColors);
      onThemeChange?.(theme);
    }
  }, [theme, currentThemeColors, onThemeChange]);

  return (
    <View className="flex-1" style={themeVars}>
      <StatusBar style={isDarkMode ? THEMES.light : THEMES.dark} />
      <GestureHandlerRootView className="flex-1">
        <SafeAreaProvider className="flex-1">
          <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
          <PortalHost />
          <NToast />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </View>
  );
};

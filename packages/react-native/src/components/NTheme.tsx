import React, { useEffect } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { vars } from 'nativewind';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PortalHost } from '@rn-primitives/portal';
import { NToast } from '@/components/NToast';
import { THEMES } from '@/lib/utils';
import { setAndroidNavigationBar } from '@/lib/android-navigation-bar';
import { useNTheme } from '@/hooks/useNTheme';

interface Props {
  children: React.ReactNode;
  theme: string;
  themeColors: any;
}

export const NTheme = (props: Props) => {
  const { theme: rawTheme, themeColors } = props;
  const { theme, setTheme, setThemeColors, isDarkMode } = useNTheme();

  useEffect(() => {
    const finalTheme = rawTheme ?? theme ?? THEMES.light;
    setTheme(finalTheme as any);
    setThemeColors(themeColors);
    setAndroidNavigationBar(finalTheme, themeColors);
  }, []);

  useEffect(() => {
    theme && setAndroidNavigationBar(theme, themeColors);
  }, [theme, themeColors]);

  const themeVars = {
    light: vars({
      '--color-primary': themeColors.light.colors.primary,
      '--color-background': themeColors.light.colors.background,
      '--color-card': themeColors.light.colors.card,
      '--color-text': themeColors.light.colors.text,
      '--color-muted': themeColors.light.colors.muted,
      '--color-border': themeColors.light.colors.border
    }),
    dark: vars({
      '--color-primary': themeColors.dark.colors.primary,
      '--color-background': themeColors.dark.colors.background,
      '--color-card': themeColors.dark.colors.card,
      '--color-text': themeColors.dark.colors.text,
      '--color-muted': themeColors.dark.colors.muted,
      '--color-border': themeColors.dark.colors.border
    })
  } as any;

  return (
    <View className="flex-1" style={themeVars[theme || THEMES.light]}>
      <StatusBar style={isDarkMode ? THEMES.light : THEMES.dark} />
      <GestureHandlerRootView className="flex-1">
        <SafeAreaProvider className="flex-1">
          <BottomSheetModalProvider>{props.children}</BottomSheetModalProvider>
          <PortalHost />
          <NToast />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </View>
  );
};

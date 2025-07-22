import './global.css';
import 'react-native-reanimated';
import { View } from 'react-native';
import { NButton, NTheme, useNTheme, THEMES } from '@nayan-ui/react-native';
import { themeColors } from '@/Config';

export default function App() {
  const {theme, isDarkMode, setTheme} = useNTheme();

  const changeTheme = () => {
    setTheme(isDarkMode ? THEMES.light : THEMES.dark);
  }

  return (
    <NTheme theme={theme || THEMES.light} themeColors={themeColors}>
      <View className="flex-1 justify-center items-center bg-background">
        <NButton onPress={changeTheme}>Change Theme</NButton>
      </View>
    </NTheme>
  );
}
import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import './global.css';

export default function App() {
  console.log('App component rendering...');

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="mb-2 text-xl font-bold">Nayan UI React Native Example</Text>
      <Text className="text-base text-gray-600">Hello World with NativeWind!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// _layout.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from '../components/navigation/MainTabNavigator'; // 네비게이터 파일 가져오기

export default function Layout() {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
}

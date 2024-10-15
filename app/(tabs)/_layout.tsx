// _layout.tsx (이 파일은 기본 레이아웃을 설정하며, 각 페이지의 공통 레이아웃을 정의합니다.)
import { Tabs } from 'expo-router';
import React from 'react';
import {TabBarIcon} from '../../components/navigation/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="menu" options={{
        title: '전체메뉴',
        tabBarIcon: ({ color, size }) => <TabBarIcon name="menu" color={color} size={size} />,
        headerShown: false
        }} />
      <Tabs.Screen name="travel-recommendation" options={{
        title: '여행지 추천',
        tabBarIcon: ({ color, size }) => <TabBarIcon name="map" color={color} size={size} />,
        headerShown: false
        }} />
      <Tabs.Screen name="index" options={{
        title: 'AI 채팅',
        tabBarIcon: ({ color, size }) => <TabBarIcon name="chatbubble-ellipses-sharp" color={color} size={size} />,
        headerShown: false
        }} />
      <Tabs.Screen name="my-page" options={{
        title: '마이페이지',
        tabBarIcon: ({ color, size }) => <TabBarIcon name="person" color={color} size={size} />,
        headerShown: false
        }} />
      <Tabs.Screen name="my-travel" options={{
        title: '내 여행',
        tabBarIcon: ({ color, size }) => <TabBarIcon name="calendar" color={color} size={size} />,
        headerShown: false
        }} />

    </Tabs>
  );
}

// components/navigation/MainTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuScreen from '../MenuScreen';
import TravelRecommendationScreen from '../TravelRecommendationScreen';
import AIChatScreen from '../AIChatScreen';
import MyPageScreen from '../MyPageScreen';
import MyTravelScreen from '../MyTravelScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="전체 메뉴" component={MenuScreen} />
      <Tab.Screen name="여행지 추천" component={TravelRecommendationScreen} />
      <Tab.Screen name="AI 채팅" component={AIChatScreen} />
      <Tab.Screen name="마이 페이지" component={MyPageScreen} />
      <Tab.Screen name="내 여행" component={MyTravelScreen} />
    </Tab.Navigator>
  );
}

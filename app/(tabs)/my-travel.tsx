// app/my-travel.tsx
import HeaderBar from '@/components/HeaderBar';
import React from 'react';
import { View, Text } from 'react-native';

export default function MyTravelScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HeaderBar isMain={false} title="내 여행"/>
      <Text>내 여행</Text>
    </View>
  );
}
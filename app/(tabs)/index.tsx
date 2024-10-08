// index.tsx (루트 페이지로, 메인 네비게이션 역할을 합니다.)
import React from 'react';
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AI 채팅</Text>
    </View>
  );
}
// app/menu.tsx (각 화면을 개별적으로 정의합니다.)
import React from 'react';
import { View, Text } from 'react-native';

export default function MenuScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>전체 메뉴</Text>
    </View>
  );
}
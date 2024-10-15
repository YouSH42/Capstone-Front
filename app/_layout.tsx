// _layout.tsx (이 파일은 기본 레이아웃을 설정하며, 각 페이지의 공통 레이아웃을 정의합니다.)
import { Stack } from 'expo-router/stack';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

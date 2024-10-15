// index.tsx (루트 페이지로, 메인 네비게이션 역할을 합니다.)
// ChatBot 메인 챗봇입니다

import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

const { height, width } = Dimensions.get("window");

export default function Home() {
  // IMessage 배열 타입을 명시적으로 설정
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: '안녕하세요! 반가워요 :D',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', width: width, top: 50, zIndex: 10 }}>
        <Text style={{ fontSize: 30, fontWeight: "900" }}>TRAVEL MAIKER</Text>
      </View>
      <GiftedChat
        placeholder={'메세지를 입력하세요...'}
        alwaysShowSend={true}
        messages={messages}
        textInputProps={{ keyboardAppearance: 'dark', autoCorrect: false }}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
}

//   return (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//   <Text>AI 채팅</Text>
// </View>
// );
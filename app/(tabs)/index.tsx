// index.tsx (루트 페이지로, 메인 네비게이션 역할을 합니다.)
import React from 'react';
import { View, Text } from 'react-native';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AI 채팅</Text>
    </View>
  );
}
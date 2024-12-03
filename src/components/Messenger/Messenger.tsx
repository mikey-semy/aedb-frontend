import React , { useState, useEffect } from 'react';
import { MessengerContainer } from './Messenger.styles';
import { Message as MessageType } from './Messenger.types';
import { getMessageAPI, sendMessageAPI } from './Messenger.api';

import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

const Messenger: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputValue, setInputValue] = useState("");

  const fetchMessages = async () => {
    const response = await getMessageAPI();
    setMessages(response.data);
  };

  const sendMessage = async () => {
    if (inputValue.trim()) {
      const newMessage = { sender: "Вы", content: inputValue };
      setMessages((prev) => [...prev, newMessage]); // Добавляем сообщение пользователя сразу

      try {
        const response = await sendMessageAPI(newMessage);
        const assistantMessage = { sender: "Assistant", content: response.data.response };
        setMessages((prev) => [...prev, assistantMessage]); // Добавляем ответ ассистента
      } catch (error) {
        console.error("Ошибка отправки сообщения:", error);
      }

      setInputValue(""); // Очищаем поле ввода
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

    return (
        <MessengerContainer>
            <MainContainer>
                <ChatContainer>
                  <MessageList>
                  {messages.map((msg, index) => (
                    <Message
                      key={index}
                      model={{
                        message: msg.content,
                        sentTime: "сейчас",
                        sender: msg.sender,
                      }}
                    />
                    ))}
                  </MessageList>
                  <MessageInput 
                    placeholder="Введите сообщение"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onSend={sendMessage} 
                  />
                </ChatContainer>
            </MainContainer>
        </MessengerContainer>
    )
}
export default Messenger;
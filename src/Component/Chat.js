// src/components/Chat.js
import React, { useState } from 'react';
import { Box, VStack, HStack, Textarea, Button, Text } from '@chakra-ui/react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');

      // Simulate a reply from the property management (this can be replaced by an actual API call)
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: 'We received your message and will get back to you shortly.', sender: 'property' }]);
      }, 1000);
    }
  };

  return (
    <Box p="8">
        <Text fontSize="2xl" mb={4}>Talk to your community specialist</Text>
        <Box p="8" bg="white.100" borderRadius="md" boxShadow="md" h="500px" display="flex" flexDirection="column">
        <VStack spacing="4" align="stretch" flex="1" overflowY="auto" mb="4">
            {messages.map((msg, index) => (
            <HStack key={index} justify={msg.sender === 'user' ? 'flex-end' : 'flex-start'}>
                <Box
                bg={msg.sender === 'user' ? 'blue.100' : 'green.100'}
                p="3"
                borderRadius="md"
                maxW="80%"
                >
                <Text>{msg.text}</Text>
                </Box>
            </HStack>
            ))}
        </VStack>
        <HStack spacing="4">
            <Textarea
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            size="sm"
            resize="none"
            />
            <Button colorScheme="blue" onClick={sendMessage}>
            Send
            </Button>
        </HStack>
        </Box>
    </Box>
  );
}

export default Chat;

import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  Stack,
  RadioGroup,
  Radio,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; // 假设你在使用 react-router-dom

function RegisterPage() {
  const [userType, setUserType] = useState('Resident');

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="gray.50"
      p={8}
    >
      <Box
        bg="white"
        p={8}
        rounded="lg"
        boxShadow="lg"
        width="100%"
        maxW="600px" // 设置表单容器的最大宽度
        mx="auto"
      >
        <Box textAlign="center">
          <Heading mb={6} color="orange.400">
            Home Hub
          </Heading>
          <Text mb={4} fontSize="lg" fontWeight="bold" color="black">
            Sign up your account
          </Text>
        </Box>

        <Stack spacing={4}>
          <FormControl as="fieldset">
            <FormLabel as="legend">Who are you?</FormLabel>
            <RadioGroup
              defaultValue={userType}
              onChange={(value) => setUserType(value)}
            >
              <Stack direction="row" spacing={4}>
                <Radio value="Resident">Resident</Radio>
                <Radio value="Property Company">Property Company</Radio>
                <Radio value="Third Party">Third Party</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl id="communityName">
            <FormLabel>Community Name</FormLabel>
            <Input type="text" placeholder="Enter your community name" />
          </FormControl>

          <FormControl id="Email">
            <FormLabel>Email</FormLabel>
            <Input type="text" placeholder="Enter your Email" />
          </FormControl>

          <FormControl id="username">
            <FormLabel>User Name</FormLabel>
            <Input type="text" placeholder="Enter your username" />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>

          <FormControl id="confirmPassword">
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>

          <Button colorScheme="orange" size="lg" width="full">
            Sign up
          </Button>

          <Text mt={4} textAlign="center">
            <Link as={RouterLink} to="/" color="orange.400">
              Go back
            </Link>
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
}

export default RegisterPage;

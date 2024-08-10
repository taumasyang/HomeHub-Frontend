import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Text,
  Link,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Image,
  Stack,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

import LoginImage from '../Resources/Login_image.png';

function LoginPage() {
    const navigate = useNavigate(); 

  return (
    <Flex
      minH="100vh" 
      align="center"
      justify="center"
      bg="gray.50"
      p={8} 
    >
      <Flex
        bg="white"
        p={8}
        rounded="lg"
        boxShadow="lg"
        width="100%" 
        maxW="1200px" 
        mx="auto"
        alignItems="center"
        justifyContent="space-between" 
        direction={{ base: 'column', md: 'row' }} 
      >
        <Box
          width={{ base: '100%', md: '45%' }} 
          textAlign={{ base: 'center', md: 'left' }}
          mb={{ base: 8, md: 0 }} 
        >
          <Heading mb={6} color="orange.400">
            Home Hub
          </Heading>
          <Text mb={4} fontSize="lg" fontWeight="bold" color ="black">
            Login into your account
          </Text>

          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <InputGroup>
                <InputLeftElement children={<EmailIcon color="gray.500" />} />
                <Input type="text" placeholder="Enter your username" />
              </InputGroup>
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement children={<LockIcon color="gray.500" />} />
                <Input type="password" placeholder="Enter your password" />
              </InputGroup>
              <Flex justify="flex-end">
                <Link color="orange.400" mt={2}>
                  Forgot Password?
                </Link>
              </Flex>
            </FormControl>

            <Button colorScheme="orange" size="lg" width="full">
              Login Now
            </Button>
          </Stack>

          <Text mt={6} fontWeight="bold" color ="black">
            OR
          </Text>

          <Button colorScheme="orange" variant="outline" mt={4} width="full" onClick={() => navigate('/Register')}>
            Signup Now
          </Button>
        </Box>

        <Box
          width={{ base: '100%', md: '50%' }} 
          textAlign="center"
        >
          <Image
            src={LoginImage} 
            alt="Illustration"
            maxH="500px"
            mx="auto"
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default LoginPage;

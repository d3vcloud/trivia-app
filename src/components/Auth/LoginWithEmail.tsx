import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Link,
  Center
} from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'

const LoginWithEmail: React.FC = () => {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
        bg="gray.900"
      >
        <Heading
          lineHeight={1.1}
          fontSize={{ base: '2xl', md: '3xl' }}
          color="white"
        >
          Log in with your Email
        </Heading>
        <Text fontSize={{ base: 'sm', sm: 'md' }} color="gray.400">
          You&apos;ll get an email with a magic link
        </Text>
        <FormControl id="email">
          <Input
            placeholder="Enter your email"
            _placeholder={{ color: 'gray.300' }}
            color="gray.300"
            type="email"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg="blue.400"
            color="white"
            _hover={{
              bg: 'blue.500'
            }}
          >
            Send a Magic Link
          </Button>
          <Center>
            <Link as={ReachLink} to="/auth/login" color="blue.400">
              Login with other methods
            </Link>
          </Center>
        </Stack>
      </Stack>
    </Flex>
  )
}

export default LoginWithEmail

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
import { useState } from 'react'
import { Link as ReachLink } from 'react-router-dom'
import { signInWithMagicLink } from 'supabase/services/auth'

const LoginWithEmail: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (email === '') return

    try {
      await signInWithMagicLink(email)
    } catch (error) {
      console.error(error)
    }
  }

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
        <form onSubmit={handleSubmit}>
          <FormControl id="email" mb={'1rem'}>
            <Input
              placeholder="Enter your email"
              _placeholder={{ color: 'gray.300' }}
              color="gray.300"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              type="submit"
              bg="blue.400"
              color="white"
              _hover={{
                bg: 'blue.500'
              }}
            >
              Send a Magic Link
            </Button>
          </Stack>
        </form>
        <Center>
          <Link as={ReachLink} to="/auth/login" color="blue.400">
            Login with other methods
          </Link>
        </Center>
      </Stack>
    </Flex>
  )
}

export default LoginWithEmail

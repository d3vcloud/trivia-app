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
import useForm from 'hooks/useForm'
import { signInWithMagicLink } from 'supabase/services/auth'
import { AlertSuccess } from 'components/Ui/Alerts'
import { useState } from 'react'

const initialState = {
  email: ''
}

interface IMagicLinkForm {
  email: string
}

const LoginWithEmail = (): JSX.Element => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoadingFetch, setIsLoadingFetch] = useState(false)
  const {
    formValues: { email },
    handleInputChange,
    reset
  } = useForm<IMagicLinkForm>(initialState)

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (email === '') return

    try {
      setIsLoadingFetch(true)
      const res = await signInWithMagicLink(email)
      if (res) {
        console.log(res)
        reset()
        setIsSuccess(true)
        setIsLoadingFetch(false)
      }
    } catch (error) {
      setIsLoadingFetch(false)
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
        {isSuccess && (
          <AlertSuccess
            title="Success"
            message="Link sent successfully. Please check your email"
          />
        )}
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
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              isLoading={isLoadingFetch}
              loadingText="Wait a few seconds"
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

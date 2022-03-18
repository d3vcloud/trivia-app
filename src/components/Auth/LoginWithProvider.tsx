import { FcGoogle } from 'react-icons/fc'
import { FaEnvelope, FaFacebook } from 'react-icons/fa'
import { Link as ReachLink } from 'react-router-dom'
import {
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  Box,
  Divider
} from '@chakra-ui/react'

const LoginWithProvider: React.FC = () => {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        // my={12}
        bg="gray.900"
      >
        <Heading
          lineHeight={1.1}
          fontSize={{ base: '2xl', md: '3xl' }}
          mb="2rem"
          color="white"
          fontWeight={'semibold'}
        >
          Log in to continue
        </Heading>
        {/* <Text fontSize={{ base: 'sm', sm: 'md' }}>
          Choose your favorite social media
        </Text> */}
        {/* Facebook */}
        <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Continue with Facebook</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w={'full'} leftIcon={<FcGoogle />}>
          <Text>Sign in with Google</Text>
        </Button>
        <Divider mb="2rem" />
        {/* Email */}
        <Box
          as={ReachLink}
          to="/auth/email"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          height="2.5rem"
          width="100%"
          lineHeight="1.2"
          borderRadius="0.375rem"
          border="none"
          cursor="pointer"
          fontSize="1rem"
          bg="#e82c64"
          color="white"
          fontWeight="semibold"
          _hover={{ bg: '#ec9cb4' }}
        >
          <Text mr="0.5rem">
            <FaEnvelope />
          </Text>
          <Text>Sign In with Email</Text>
        </Box>
      </Stack>
    </Flex>
  )
}

export default LoginWithProvider

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box
} from '@chakra-ui/react'

type AlertProps = {
  title: string
  message: string
}

export const AlertSuccess = ({ title, message }: AlertProps): JSX.Element => {
  return (
    <Alert status="success">
      <AlertIcon />
      <Box flex="1">
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription display="block">{message}</AlertDescription>
      </Box>
      {/* <CloseButton position="absolute" right="8px" top="8px" /> */}
    </Alert>
  )
}

import { VStack, Spinner } from '@chakra-ui/react'

export const Loading = () => {
  return (
    <VStack align="center" p="60px">
      <Spinner
        thickness="4px"
        speed="0.6s"
        emptyColor="gray.200"
        color="primary.500"
        size="xl"
      />
    </VStack>
  )
}

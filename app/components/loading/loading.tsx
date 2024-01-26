import { VStack, Spinner } from '@chakra-ui/react'

type LoadingProps = {
  size?: string
  p?: string
}
export const Loading = ({ size = 'xl', p = '60px' }: LoadingProps) => {
  return (
    <VStack align="center" p={p}>
      <Spinner
        thickness="4px"
        speed="0.6s"
        emptyColor="gray.200"
        color="primary.500"
        size={size}
      />
    </VStack>
  )
}

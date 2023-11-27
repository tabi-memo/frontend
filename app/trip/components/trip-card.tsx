import { Card, CardBody, Heading, Flex, Image, Box } from '@chakra-ui/react'
import { MdAccountCircle } from 'react-icons/md'

type TripCardProps = {
  data: {
    id: number
    title: string
    image_storage_object_id: string
    date_from: string
    date_to: string
    share: { id: string; image: string }[]
  }
}

export const TripCard = ({ data }: TripCardProps) => {
  return (
    <Card
      maxW={{ base: '100%', lg: '360px' }}
      pb={{ base: '12px', md: '0px' }}
      flexDir={{ base: 'row', md: 'column' }}
      gap={{ base: '14px', md: '0px' }}
      justify="space-between"
      w="100%"
      borderRadius={{ base: 'none', md: 'lg' }}
      boxShadow={{ base: 'none', md: 'base' }}
      borderBottom={{ base: '1px', md: 'none' }}
      borderColor={{ base: 'gray.200', md: 'none' }}
      align="center"
    >
      <Image
        src={data.image_storage_object_id}
        alt={`Picture of ${data.title}`}
        w={{ base: '150px', md: '100%' }}
        h={{ base: '100px', md: '240px' }}
        objectFit={'cover'}
      />
      <CardBody
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        overflow="hidden"
        w="100%"
        gap="8px"
        py={{ base: '0', md: '12px' }}
        px={{ base: '0', md: '8px' }}
      >
        <Heading
          fontSize={{ base: 'lg', md: 'xl' }}
          color="primary.700"
          display={'-webkit-box'}
          overflow={'hidden'}
          sx={{
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: '2'
          }}
        >
          {data.title}
        </Heading>
        <Flex gap="8px" color="gray.400">
          <Box
            w={{ base: '26px', md: '38px' }}
            h={{ base: '26px', md: '38px' }}
          >
            <MdAccountCircle size="100%" />
          </Box>
        </Flex>
        <Flex fontSize={{ base: 'sm', md: 'md' }}>
          {data.date_from} - {data.date_to}
        </Flex>
      </CardBody>
    </Card>
  )
}

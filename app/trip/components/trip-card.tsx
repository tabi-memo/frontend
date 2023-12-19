import { Link as NextLink } from '@chakra-ui/next-js'
import {
  Card,
  CardBody,
  Heading,
  Flex,
  Image,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import { MdAccountCircle } from 'react-icons/md'
import { formatDateToDayMonthYear } from '@/libs/utils'
import { TripsCollectionQuery } from '@generated/api'

type TripCardProps = {
  data: NonNullable<TripsCollectionQuery['tripsCollection']>['edges'][number]
}

export const TripCard = ({ data }: TripCardProps) => {
  const bgColorSp = useColorModeValue('white', 'gray.800')
  const bgColorPc = useColorModeValue('white', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const imageSrc = useColorModeValue(
    '/images/no_image_light.jpg',
    '/images/no_image_dark.jpg'
  )

  return (
    <Card
      as={NextLink}
      href={`/trip/${data.node.id}`}
      role={'group'}
      maxW={{ base: '100%', md: 'calc(100% / 2 - 10px)', lg: '360px' }}
      pb={{ base: '12px', md: '0px' }}
      flexDir={{ base: 'row', md: 'column' }}
      gap={{ base: '14px', md: '0px' }}
      justify="space-between"
      w="100%"
      borderRadius={{ base: 'none', md: 'lg' }}
      boxShadow={{ base: 'none', md: 'base' }}
      borderBottom={{ base: '1px', md: 'none' }}
      borderColor={{ base: borderColor, md: 'none' }}
      bgColor={{ base: bgColorSp, md: bgColorPc }}
      _hover={{
        textDecoration: 'none'
      }}
    >
      <Box overflow="hidden" w={{ base: '', md: '100%' }}>
        <Image
          src={data.node.image_storage_object_id || imageSrc}
          alt={`Picture of ${data.node.title}`}
          w={{ base: '150px', md: '100%' }}
          h={{ base: '100px', md: '240px' }}
          objectFit="cover"
          _groupHover={{
            transform: 'scale(1.1)',
            transition: 'all 0.3s'
          }}
        />
      </Box>
      <CardBody
        display="flex"
        flexDir="column"
        justifyContent={{ base: 'flex-start', md: 'space-between' }}
        overflow="hidden"
        w="100%"
        gap="8px"
        py={{ base: '8px', md: '12px' }}
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
          _groupHover={{
            color: 'primary.600'
          }}
        >
          {data.node.title}
        </Heading>
        {data.node.invitationsCollection?.edges &&
          data.node.invitationsCollection.edges.length > 0 && (
            <Flex gap="8px" color="gray.400">
              {data.node.invitationsCollection?.edges.map((invitation) => (
                <Box
                  key={invitation.node.users?.id}
                  w={{ base: '26px', md: '38px' }}
                  h={{ base: '26px', md: '38px' }}
                >
                  {invitation.node.users?.profile_picture_url ? (
                    <Image
                      src={invitation.node.users?.profile_picture_url}
                      alt=""
                      borderRadius="full"
                      objectFit="cover"
                    />
                  ) : (
                    <MdAccountCircle size="100%" />
                  )}
                </Box>
              ))}
            </Flex>
          )}
        <Flex fontSize={{ base: 'sm', md: 'md' }}>
          {formatDateToDayMonthYear(data.node.date_from)} -{' '}
          {formatDateToDayMonthYear(data.node.date_to)}
        </Flex>
      </CardBody>
    </Card>
  )
}

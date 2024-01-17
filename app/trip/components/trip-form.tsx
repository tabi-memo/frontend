import { useForm, FormProvider } from 'react-hook-form'
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  Image,
  VStack,
  HStack,
  useColorModeValue
} from '@chakra-ui/react'
import { PrimaryButton } from '@/components/button'
import { CustomDateTimePicker } from '@/components/customDateTimePicker'
import { InputForm } from '@/components/input'
import { TripFormTag } from '../components'

export const TripForm = () => {
  const methods = useForm()

  const imageSrc = useColorModeValue(
    '/images/no_image_light.jpg',
    '/images/no_image_dark.jpg'
  )

  return (
    <FormProvider {...methods}>
      <VStack as="form" gap={{ base: '30px', md: '40px' }}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <InputForm type="text" placeholder="Asakusa Temple" />
        </FormControl>

        <FormControl>
          <FormLabel>Date From</FormLabel>
          <CustomDateTimePicker
            onChange={() => console.log('onChange')}
            value={null}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Date To</FormLabel>
          <CustomDateTimePicker
            onChange={() => console.log('onChange')}
            value={null}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Image</FormLabel>
          <HStack gap={{ base: '20px', md: '34px' }}>
            <Image alt="" src={imageSrc} width="50%" />
            <PrimaryButton variant="outline">Select Image </PrimaryButton>
          </HStack>
        </FormControl>

        <TripFormTag />

        <FormControl>
          <FormLabel>Cost</FormLabel>
          <InputForm type="text" placeholder="$200" />
        </FormControl>

        <PrimaryButton size="lg">Save Trip</PrimaryButton>
      </VStack>
    </FormProvider>
  )
}

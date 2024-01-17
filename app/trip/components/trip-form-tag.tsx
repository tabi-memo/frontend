import { useEffect, useRef, useState, KeyboardEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import {
  FormControl,
  FormLabel,
  Flex,
  Tag,
  useColorModeValue,
  TagLabel,
  TagCloseButton
} from '@chakra-ui/react'
import { FiPlusCircle } from 'react-icons/fi'
import { InputIcon } from '@/components/input'

export const TripFormTag = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [tags, setTags] = useState<string[]>([])

  const tagBgColor = useColorModeValue('primary.700', 'primary.800')

  const { setValue } = useFormContext()

  const addTag = () => {
    const userInput = inputRef?.current?.value
    if (userInput) {
      setTags((prevTags) => [...prevTags, userInput])
      inputRef.current!.value = ''
    }
  }

  const addEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addTag()
    }
  }

  const deleteClickHandler = (name: string) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== name))
  }

  useEffect(() => {
    setValue('tags', tags)
  }, [tags, setValue])

  return (
    <FormControl>
      <FormLabel>Tag</FormLabel>
      <InputIcon
        type={'text'}
        placeholder={'Add tag'}
        ariaLabel={'Add tag'}
        icon={FiPlusCircle}
        ref={inputRef}
        onKeyDown={(e) => addEnterHandler(e)}
        onClick={addTag}
      />
      <Flex mt="20px" gap="10px" flexWrap="wrap">
        {tags.map((tag, index) => (
          <Tag
            key={index}
            variant="solid"
            bgColor={tagBgColor}
            borderRadius="full"
            px={'20px'}
            h={{ base: '1.5rem', md: '2.125rem' }}
            fontSize={{ base: 'sm', md: 'sm' }}
            position="relative"
          >
            <TagLabel>{tag}</TagLabel>
            <TagCloseButton onClick={() => deleteClickHandler(tag)} />
          </Tag>
        ))}
      </Flex>
    </FormControl>
  )
}

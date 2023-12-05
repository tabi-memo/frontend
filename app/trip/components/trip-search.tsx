'use client'
import { useRef, FormEvent, KeyboardEvent } from 'react'
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { InputSearch } from '@/components/input'

export const TripSearch = () => {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  const submitByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const userInput = inputRef?.current?.value
      console.log('userInput', userInput)

      if (userInput) {
        const encodedInput = encodeURIComponent(userInput)
        router.push(`/?q=${encodedInput}`)
        return
      }

      router.push('/')
    }
  }

  const submitHandler = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const userInput = inputRef?.current?.value
    if (userInput) {
      const encodedInput = encodeURIComponent(userInput)
      router.push(`/?q=${encodedInput}`)
      return
    }

    router.push('/')
  }

  return (
    <Box as="form" onSubmit={submitHandler}>
      <InputSearch
        type={'text'}
        name={'searchWord'}
        placeholder={'Search trips by title'}
        ariaLabel={'Search trips by title'}
        onKeyDown={(e) => submitByEnter(e)}
        ref={inputRef}
      />
    </Box>
  )
}

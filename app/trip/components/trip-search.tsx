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
      const useInput = inputRef?.current?.value
      router.push(`/?q=${useInput}`)
    }
  }

  const submitHandler = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const useInput = inputRef?.current?.value
    router.push(`/?q=${useInput}`)
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

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
      if (useInput) router.push(`/?q=${inputRef?.current?.value}`)
    }
  }

  const submitHandler = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const useInput = inputRef?.current?.value
    if (useInput) router.push(`/?q=${inputRef?.current?.value}`)
  }

  return (
    <Box as="form" onSubmit={submitHandler}>
      <InputSearch
        type={'text'}
        name={'searchWord'}
        placeholder={'places, dates, tag'}
        ariaLabel={'Search Trips'}
        onKeyDown={(e) => submitByEnter(e)}
        ref={inputRef}
      />
    </Box>
  )
}

import React from 'react'
import { Link as NextLink } from '@chakra-ui/next-js'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'

export type LinkProps = {
  isExternal?: boolean
  hasUnderLine?: boolean
  href: string
  children?: React.ReactNode
}

const underLineStyles = {
  textDecoration: 'underline',
  textUnderlineOffset: 2,
  _hover: {
    opacity: '.8',
    textDecoration: 'underline',
    textUnderlineOffset: 2
  }
}

export const Link = ({
  isExternal = false,
  hasUnderLine = false,
  href,
  children,
  ...props
}: LinkProps & ChakraLinkProps) => {
  const linkStyles = hasUnderLine
    ? {
        ...underLineStyles,
        ...props
      }
    : {
        _hover: underLineStyles,
        ...props
      }

  return isExternal ? (
    <ChakraLink href={href} {...linkStyles} isExternal>
      {children}
    </ChakraLink>
  ) : (
    <NextLink href={href} {...linkStyles}>
      {children}
    </NextLink>
  )
}

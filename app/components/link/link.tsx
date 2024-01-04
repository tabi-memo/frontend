import React from 'react'
import { Link as NextLink } from '@chakra-ui/next-js'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'

export type LinkProps = {
  isExternal?: boolean
  hasUnderLine?: boolean
  hasHoverUnderLine?: boolean
  href: string
  children?: React.ReactNode
}

export const Link = ({
  isExternal = false,
  hasUnderLine = false,
  hasHoverUnderLine = true,
  href,
  children,
  ...props
}: LinkProps & ChakraLinkProps) => {
  const underLineStyles = {
    textDecoration: 'underline',
    textUnderlineOffset: 2,
    _hover: {
      opacity: hasHoverUnderLine ? '.8' : '.7',
      textDecoration: hasHoverUnderLine ? 'underline' : 'none',
      textUnderlineOffset: 2
    }
  }

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

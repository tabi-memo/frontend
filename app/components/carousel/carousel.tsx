'use client'
import React from 'react'
import Slider from 'react-slick'
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { LeftArrow, RightArrow } from '@/icons'

type CarouselProps = {
  urls: string[]
}

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const Carousel = ({ urls }: CarouselProps) => {
  const [slider, setSlider] = React.useState<Slider | null>(null)

  const top = useBreakpointValue({ base: '50%', md: '50%' })
  const side = useBreakpointValue({ base: '-45px', md: '-60px' })

  return (
    <Box
      position={'relative'}
      width={{ base: '80%', md: '80%', lg: '100%' }}
      height={{ base: '215px', md: '320px' }}
      margin={'auto'}
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="white"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        opacity={0.8}
        onClick={() => slider?.slickPrev()}
        _hover={{ opacity: 1 }}
      >
        <LeftArrow />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        colorScheme="white"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        opacity={0.8}
        onClick={() => slider?.slickNext()}
        _hover={{ opacity: 1 }}
      >
        <RightArrow />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {urls.map((url, index) => (
          <Box
            key={index}
            width={{ base: '320px', md: '480px' }}
            margin={'auto'}
            height={{ base: '210px', md: '320px' }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  )
}

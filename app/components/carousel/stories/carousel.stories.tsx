import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Carousel, CarouselProps } from '../../carousel'

const meta: Meta<CarouselProps> = {
  title: 'Carousel/Carousel',
  component: Carousel,
  argTypes: {
    // Define any argTypes if needed
  }
}

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />

export const Default = Template.bind({})
Default.args = {
  urls: [
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
  ]
}

export default meta

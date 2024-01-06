import { Meta, StoryObj } from '@storybook/react'
import { InputForm } from '../index'

const meta: Meta<typeof InputForm> = {
  title: 'Input Form',
  component: InputForm
}

export default meta
type Story = StoryObj<typeof InputForm>

export const Default: Story = {}

import { Meta, StoryObj } from '@storybook/react'
import { TextareaForm } from '../index'

const meta: Meta<typeof TextareaForm> = {
  title: 'Textarea Input Form',
  component: TextareaForm
}

export default meta
type Story = StoryObj<typeof TextareaForm>

export const Default: Story = {}

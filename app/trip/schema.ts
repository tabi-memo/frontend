import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const tripSchema = z.object({
  title: z.string().min(1, { message: 'Please enter a title' }),
  date_from: z.date({
    required_error: 'Please select a date from',
    invalid_type_error: "That's not a date"
  }),
  date_to: z.date().nullable(),
  image_url: z.string().nullable(),
  uploaded_image_file: z
    .instanceof(File)
    .nullable()
    .refine((file) => file === null || file.size <= 10_000_000, {
      message: 'File size must be less than 10MB'
    })
    .refine((file) => file === null || file.type.startsWith('image/'), {
      message: 'Only image files are allowed'
    }),
  selectedTags: z.array(z.string()),
  cost: z.string().nullable(),
  cost_unit: z.string().nullable()
})

export type TripSchema = z.infer<typeof tripSchema>
export const tripSchemaResolver = zodResolver(tripSchema)

const tagSchema = z.object({
  name: z.string().min(1, { message: 'Tag name is required' })
})

export type TagSchema = z.infer<typeof tagSchema>
export const tagSchemaResolver = zodResolver(tagSchema)

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const tripSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  date_from: z.date(),
  date_to: z.date().nullable(),
  image_storage_object_id: z.string().nullable(),
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

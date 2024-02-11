import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const activitySchema = z.object({
  title: z.string().min(1).max(20).optional(),
  timeFrom: z.string().optional(),
  timeTo: z.string().optional(),
  address: z.string().min(0).max(50).optional(),
  url: z.union([z.string().url().nullish(), z.literal('')]),
  memo: z.string().min(0).max(300).optional(),
  cost: z.string().min(0).max(15).optional(),
  costUnit: z.string().min(0).max(15).optional(),
  imageUrls: z.array(z.string()).optional()
})

export type activitySchema = z.infer<typeof activitySchema>
export const activityResolver = zodResolver(activitySchema)

const imagesSchema = z.object({
  urls: z.array(z.string()),
  uploadedFiles: z.array(z.instanceof(File))
})

export type ImagesSchema = z.infer<typeof imagesSchema>
export const imagesResolver = zodResolver(imagesSchema)

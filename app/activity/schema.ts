import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const activitySchema = z.object({
  title: z.string().min(1, { message: 'Please enter a title' }),
  timeFrom: z.date({
    required_error: 'Please select a date from',
    invalid_type_error: "That's not a date"
  }),
  timeTo: z.date().nullable(),
  address: z.string().min(0).max(50).nullable(),
  url: z.union([z.string().url().nullish(), z.literal('')]),
  memo: z.string().min(0).max(300).nullable(),
  cost: z.string().nullable(),
  costUnit: z.string().nullable(),
  uploadedFileUrls: z.array(z.string()).optional(),
  newFiles: z.array(z.instanceof(File)).optional()
})
  .refine(
    args => {
      if (!args.timeTo) return true

      const { timeFrom, timeTo } = args
      return timeFrom < timeTo
    },
    {
      message: 'Time to must be later than time from',
      path: ['timeTo']
    }
  )

export type ActivitySchema = z.infer<typeof activitySchema>
export const activityResolver = zodResolver(activitySchema)

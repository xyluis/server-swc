import { z } from 'zod'

export const AttachmentParamsSchema = z.object({
  id: z.string(),
  id2: z.string(),
  file: z.string(),
})

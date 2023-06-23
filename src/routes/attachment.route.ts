import { AttachmentController } from '@/controllers/attachment.controller'
import { FastifyInstance } from 'fastify'

export async function attachmentRoutes(app: FastifyInstance) {
  app.get('/attachments/:id/:id2/:file', new AttachmentController().handle)
}

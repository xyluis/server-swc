import { ContentTypes } from '@/config/content-types'
import { AttachmentParamsSchema } from '@/schemas/attachment.schema'
import { AttachmentService } from '@/services/attachment.service'
import { FastifyReply, FastifyRequest } from 'fastify'

export class AttachmentController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id, id2, file } = AttachmentParamsSchema.parse(request.params)
    const [, extension] = file.split('.')

    const service = new AttachmentService()

    const render = await service.execute(id, id2, file)

    return reply.type(ContentTypes[extension]).send(render)
  }
}

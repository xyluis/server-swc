import { ContentTypes } from '@/config/content-types'
import { AttachmentParamsSchema } from '@/schemas/attachment.schema'
import { AttachmentService } from '@/services/attachment.service'
import { FastifyReply, FastifyRequest } from 'fastify'

export class AttachmentController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id, id2, file } = AttachmentParamsSchema.parse(request.params)
    const [, extension] = file.split('.')

    try {
      const service = new AttachmentService()

      const render = await service.execute(id, id2, file)

      switch (extension) {
        case 'txt':
          reply.type(ContentTypes.Txt)
          break

        case 'log':
          reply.type(ContentTypes.Txt)
          break

        case 'png':
          reply.type(ContentTypes.Png)
          break

        case 'jpg':
        case 'jpeg':
          reply.type(ContentTypes.Jpeg)
          break

        case 'gif':
          reply.type(ContentTypes.Gif)
          break

        default:
          reply.type(ContentTypes.Any)
          break
      }

      return reply.send(render)
    } catch {
      return reply.status(404).send({
        error: 'Not found',
        message: 'Attachment not found',
      })
    }
  }
}

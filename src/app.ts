import fastify from 'fastify'
import { env } from '@/config/env'
import { attachmentRoutes } from '@/routes/attachment.route'

export const app = fastify()

app.register(attachmentRoutes)

app.get('/health', (request, reply) => {
  return reply.status(200).send({
    environment: env.NODE_ENV,
    root: true,
  })
})

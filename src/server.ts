import { app } from '@/app'
import { env } from '@/config/env'

app
  .listen({
    port: env.PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('Server listening at http://localhost:3333')
  })

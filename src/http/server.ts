import fastify from 'fastify'
import { CreatePoll } from './routes/create-poll'

const app = fastify()

app.register(CreatePoll)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})

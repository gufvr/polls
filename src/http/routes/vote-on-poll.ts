import z from 'zod'
import { randomUUID } from 'node:crypto'
import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'

export async function voteOnPoll(app: FastifyInstance) {
  app.post('/polls/:pollId/votes', async (request, reply) => {
    const VoteOnPollBody = z.object({
      pollOptionId: z.string().uuid()
    })

    const voteOnPollParams = z.object({
      pollId: z.string().uuid(),
    })
    
    const { pollId } = voteOnPollParams.parse(request.params)
    const { pollOptionId } = VoteOnPollBody.parse(request.body)

    let { sessionId } = request.cookies

    if (!sessionId) {
      sessionId = randomUUID()
  
      reply.setCookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
        signed: true,
        httpOnly: true,   
      })
    }

      
      return reply.status(201).send({ sessionId })
    })
}
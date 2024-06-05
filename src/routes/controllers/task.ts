import { z } from "zod"
import { TaskUseCase } from "../../services/usecases/create-task"
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeCreateTaskUseCase } from "../../services/factories/make-task-usecase"

export async function createTask(req: FastifyRequest, res: FastifyReply) {
    const registerBodySchema = z.object({
        title: z.string(),
        description: z.string()
    })

    const { title, description } = registerBodySchema.parse(req.body)

    const createTaskUseCase = makeCreateTaskUseCase()
    await createTaskUseCase.execute({
        title,
        description
    })

    return res.status(201).send()
}
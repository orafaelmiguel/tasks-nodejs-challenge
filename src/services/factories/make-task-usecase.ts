import { PrismaTaskRepositorie } from "../repositories/prisma/prisma-task-repositorie"
import { TaskUseCase } from "../usecases/create-task"

export function makeCreateTaskUseCase() {
    const prismaTaskRepositorie = new PrismaTaskRepositorie()
    const taskUseCase = new TaskUseCase(prismaTaskRepositorie)

    return taskUseCase
}
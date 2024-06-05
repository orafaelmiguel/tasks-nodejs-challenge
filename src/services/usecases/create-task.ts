import { TaskRepositorie } from "../repositories/task-repositorie";
import { Task } from "@prisma/client";

interface TaskUseCaseRequest {
    title: string,
    description: string
}

interface TaskUseCaseResponse {
    task: Task
}

export class TaskUseCase {
    constructor(private taskRepositorie: TaskRepositorie) {}

    async execute({ title, description }: TaskUseCaseRequest): Promise<TaskUseCaseResponse> {
        const task = await this.taskRepositorie.create({
            title,
            description
        })

        return { task }
    }
}

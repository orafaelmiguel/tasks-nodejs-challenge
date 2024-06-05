import { Prisma, Task } from "@prisma/client"

export interface TaskRepositorie {
    create(data: Prisma.TaskUncheckedCreateInput): Promise<Task>
}
import { prisma } from "../../../lib/prisma";
import { Prisma, Task } from "@prisma/client";
import { TaskRepositorie } from "../task-repositorie";

export class PrismaTaskRepositorie implements TaskRepositorie {
    async create(data: Prisma.TaskCreateInput) {
        const task = await prisma.task.create({
            data
        })

        return task
    }
}
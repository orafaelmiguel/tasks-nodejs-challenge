import { FastifyInstance } from "fastify"
import { createTask } from "./controllers/task"

export async function appRoutes(app: FastifyInstance) {
    app.post('/task', createTask)
}
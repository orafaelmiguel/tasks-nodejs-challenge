import fastify from "fastify"
import { appRoutes } from "./routes/routes"

const app = fastify()

app.register(appRoutes)

export { app }
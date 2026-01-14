import { FastifyInstance } from "fastify";
import { createUserSchema } from "../schemas/create-user.schema";
import { ICreateUserBody } from "../interfaces/create-user-body";
import { createUserController } from "../controllers/create-user.controller";

export default function usersRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: ICreateUserBody }>(
    "/users",
    createUserSchema,
    createUserController,
  );
}

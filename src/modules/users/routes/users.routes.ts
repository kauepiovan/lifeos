import { FastifyInstance } from "fastify";
import { createUserSchema } from "../schemas/create-user.schema";
import { IcreateUserBody } from "../interfaces/create-user-body";
import { createUserController } from "../controllers/create-user.controller";

export default function usersRoutes(fastify: FastifyInstance, options: Object) {
  fastify.post<{ Body: IcreateUserBody }>(
    "/users",
    createUserSchema,
    createUserController,
  );
}

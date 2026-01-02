import { FastifyReply, FastifyRequest } from "fastify";
import { IcreateUserBody } from "../interfaces/create-user-body";
import { CreateUserService } from "../services/create-user.service";

export async function createUserController(
  request: FastifyRequest<{ Body: IcreateUserBody }>,
  reply: FastifyReply,
) {
  const createUserService = new CreateUserService();
  try {
    await createUserService.execute(request.body);
    return reply.status(201).send({ message: "User was created with success" });
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(400).send({ message: err.message });
    }
    return reply.status(500).send({ message: "Unexpected error" });
  }
}
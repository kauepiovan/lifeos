import { ICreateUserBody } from "../interfaces/create-user-body";
import { hash } from "bcryptjs";
import crypto from "node:crypto";
import { UsersRepository } from "../repositories/users.repository";

export class CreateUserService {
  async execute(data: ICreateUserBody) {

    const { name, email, password } = data;

    if (password.length < 6)
      throw new Error("Password must have at least 6 characters");
    if (name.length < 3)
      throw new Error("Name must have at least 3 characters");

    const passwordHash = await hash(password, 10);

    const user = {
      id: crypto.randomUUID(),
      name,
      email,
      password: passwordHash
    };

    const usersRepository = new UsersRepository();
    return usersRepository.create(user);
  }
}
import { IcreateUserBody } from "../interfaces/create-user-body";
import crypto from "node:crypto";

export class CreateUserService {
  async execute(data: IcreateUserBody) {
    const { name, email, password } = data;

    if (password.length < 6)
      throw new Error("Password must have at least 6 characters");
    if (name.length < 3)
      throw new Error("Name must have at least 3 characters");

    const user = {
      id: crypto.randomUUID(),
      name,
      email,

    };
  }
}
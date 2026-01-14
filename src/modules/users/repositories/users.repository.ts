import { IUser } from "../interfaces/users-repository";
import { prisma, Prisma } from "../../../shared/prisma/prisma"

export class UsersRepository {

  async create(data: Prisma.UserCreateInput): Promise<IUser> {
    const createUser = await prisma.user.create({ data })
    const { id, name, email, createdAt } = createUser
    return { id, name, email, createdAt }
  }

}
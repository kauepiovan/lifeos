import { ICreateUserBody } from "./create-user-body";

export interface IUser {
  id?: string | undefined;
  name: string;
  email: string;
  password?: string;
  createdAt?: string | Date | undefined;
  updatedAt?: string | Date | undefined;
}

export interface IUsersRepository {
  create(data: ICreateUserBody): Promise<IUser>
  findByEmail(email: string): Promise<IUser | null>
}
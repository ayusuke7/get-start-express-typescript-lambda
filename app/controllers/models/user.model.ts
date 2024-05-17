import { UserEntity } from "../../repositorys/entities/user.entity";

export type UserModel = Omit<UserEntity, "password">;

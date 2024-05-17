import { Logger } from "../config/logger";
import { UserEntity } from "./entities/user.entity";

export class UserRepository {
  constructor() {}

  async findByEmail(email: string): Promise<UserEntity | null> {
    Logger.log("[UserRepository]", "findByEmail", email);

    try {
      /* simulate findByEmail user database */
      const data = await new Promise<UserEntity | null>((resolve) => {
        setTimeout(() => {
          const user = {
            userId: 123,
            email: "user@gmail.com",
            password:
              "$2a$10$gVB.rGfWRfvdNapO3xJ7auRl68EQjmSTJ7VaB2iG/JX5ImQjFNM.6",
          };
          resolve(user.email === email ? user : null);
        }, 500);
      });
      return data;
    } catch (error) {
      throw { message: `there was a problem` };
    }
  }

  async findOne(userId: number): Promise<UserEntity> {
    Logger.log("[UserRepository]", "findOne", userId);

    try {
      /* simulate findOne user database */
      const data = await new Promise<UserEntity>((resolve) => {
        setTimeout(() => {
          resolve({
            userId: 123,
            email: "user@emai.com",
            password:
              "$2a$10$gVB.rGfWRfvdNapO3xJ7auRl68EQjmSTJ7VaB2iG/JX5ImQjFNM.6",
          });
        }, 500);
      });
      return data;
    } catch (error) {
      throw { message: `there was a problem` };
    }
  }

  async create(user: UserEntity): Promise<{ userId: number }> {
    Logger.log("[UserRepository]", "create", user);

    try {
      /* simulate create new user database */
      const data = await new Promise<{ userId: number }>((resolve) => {
        setTimeout(() => {
          resolve({
            userId: 123,
          });
        }, 500);
      });
      return data;
    } catch (error) {
      throw { message: `there was a problem` };
    }
  }

  async update(user: UserEntity): Promise<UserEntity> {
    Logger.log("[UserRepository]", "update", user);

    if (!this.findOne(user?.userId)) {
      throw { status: 404, message: "user not found" };
    }

    try {
      /* simulate update user database */
      const data = await new Promise<UserEntity>((resolve) => {
        setTimeout(() => {
          resolve(user);
        }, 500);
      });

      return data;
    } catch (error) {
      throw { message: `there was a problem` };
    }
  }

  async delete(userId: number): Promise<boolean> {
    Logger.log("[UserRepository]", "delete", userId);

    if (!this.findOne(userId)) {
      throw { status: 404, message: "user not found" };
    }

    try {
      /* simulate delete user database */
      const data = await new Promise<boolean>((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 500);
      });

      return data;
    } catch (error) {
      throw { message: `there was a problem` };
    }
  }
}

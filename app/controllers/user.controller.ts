import { NextFunction, Request, Response } from "express";
import { UserMessages } from "../common/messages/user.messages";
import { UserRepository } from "../repositorys/user.repository";
import { UserModel } from "./models/user.model";

const userRepository = new UserRepository();

export class UserController {
  constructor() {}

  async getUser(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      if (+id !== req.payload?.userId) {
        throw UserMessages.userNotPermited;
      }
      const user = await userRepository.findOne(+id);
      res.send(user as UserModel);
    } catch (error) {
      next(error);
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await userRepository.create(req.body);
      res.send(user);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      if (+id !== req.payload?.userId) {
        throw UserMessages.userNotPermited;
      }
      const user = await userRepository.update(req.body);
      res.send(user as UserModel);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      if (+id !== req.payload?.userId) {
        throw UserMessages.userNotPermited;
      }
      await userRepository.delete(+id);
      res.send();
    } catch (error) {
      next(error);
    }
  }
}

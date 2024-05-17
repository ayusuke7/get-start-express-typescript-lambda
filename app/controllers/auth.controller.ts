import { NextFunction, Request, Response } from "express";
import { UserMessages } from "../common/messages/user.messages";
import { UserRepository } from "../repositorys/user.repository";
import { Security } from "../utils/security";

const userRepository = new UserRepository();

export class AuthController {
  constructor() {}

  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    try {
      const user = await userRepository.findByEmail(email);

      if (!user || !Security.compare(user?.password, `${password}`)) {
        throw UserMessages.userOrPasswordIncorrect;
      }

      res.send({
        user: {
          userId: user.userId,
          email: user.email,
        },
        token: Security.signJWT({
          userId: user?.userId,
        }),
      });
    } catch (error) {
      next(error);
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    try {
      const hasExists = await userRepository.findByEmail(email);
      if (hasExists) {
        throw UserMessages.userHasExists;
      }

      const user = await userRepository.create({
        ...req.body,
        password: Security.encrypt(password),
      });
      res.send(user);
    } catch (error) {
      next(error);
    }
  }
}

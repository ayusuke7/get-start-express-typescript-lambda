import { NextFunction, Request, Response } from "express";
import { UserController } from "../../app/controllers/user.controller";
import { UserRepository } from "../../app/repositorys/user.repository";

describe("[BibleController]", () => {
  let controller: UserController;

  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = { params: { id: "123" } };
    mockRequest["payload"] = { userId: 123 };

    mockResponse = { send: jest.fn() };
    controller = new UserController();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("[findOne]", () => {
    test("should be with success response", async () => {
      const spyRepository = jest
        .spyOn(UserRepository.prototype, "findOne")
        .mockResolvedValue({
          userId: 1,
          email: "any_email",
          password: "any_password",
        });

      await controller.getUser(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(spyRepository).toHaveBeenCalledTimes(1);
      expect(mockResponse.send).toHaveBeenCalledWith({
        email: "any_email",
        password: "any_password",
        userId: 1,
      });
    });

    test("should be with release error", async () => {
      const error = new Error("error repository");
      jest.spyOn(UserRepository.prototype, "findOne").mockImplementation(() => {
        throw error;
      });

      await controller.getUser(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});

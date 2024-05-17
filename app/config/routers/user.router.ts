import { Router } from "express";
import { UserController } from "../../controllers/user.controller";

const userController = new UserController();

const router: Router = Router();
const path = "/user";
router["path"] = path;

/* resgister routes */
router.post(`${path}`, userController.createUser);
router.get(`${path}/:id`, userController.getUser);
router.put(`${path}/:id`, userController.updateUser);
router.delete(`${path}/:id`, userController.deleteUser);

export { router as UserRouter };

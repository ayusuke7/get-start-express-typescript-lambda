import { Router } from "express";
import { AuthController } from "../../controllers/auth.controller";

const authController = new AuthController();

const router: Router = Router();
const path = "/auth";
router["path"] = path;

/* resgister routes */
router.post(`${path}/login`, authController.login);
router.post(`${path}/register`, authController.register);

export { router as AuthRouter };

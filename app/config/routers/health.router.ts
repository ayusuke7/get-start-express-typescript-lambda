import { Router } from "express";
import { name, version } from "../../../package.json";

const router: Router = Router();
const path = "/health";
router["path"] = path;

router.get(path, (_, res) => res.send({ name, version }));

export { router as HealthRouter };

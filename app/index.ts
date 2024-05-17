import { AuthRouter } from "./config/routers/auth.router";
import { HealthRouter } from "./config/routers/health.router";
import { UserRouter } from "./config/routers/user.router";
import { AppServer } from "./server";

/* create a new server */
const port = process.env.PORT ?? 3333;
const routers = [HealthRouter, AuthRouter, UserRouter];
const server = new AppServer(routers, +port);

export { server };

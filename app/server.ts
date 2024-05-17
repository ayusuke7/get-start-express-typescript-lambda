import "reflect-metadata";

import cors from "cors";
import express, { Application, Router } from "express";
import { Logger } from "./config/logger";
import { authMiddleware } from "./middlewares";
import { erroMiddleware } from "./middlewares/error.middleware";

export class AppServer {
  /* define unprotect routers */
  private unlessRoutes: string[] = ["/api/auth/login", "/api/auth/register"];

  private routers: Router[];
  private port: number;
  public app: Application;

  constructor(routers: Router[], port: number) {
    this.routers = routers;
    this.port = port;

    this.app = express();
    this.app.use(cors());
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(authMiddleware(this.unlessRoutes));

    this.configureRoutes();

    /* configure error middleware all routes */
    this.app.use(erroMiddleware);
  }

  private configureRoutes() {
    for (let router of this.routers) {
      this.app.use("/api", router);
      router.stack?.forEach(({ route }) => {
        const method = Object.keys(route.methods)[0]?.toUpperCase() ?? "ANY";
        const path = `/api${route?.path}`;
        Logger.log("[REGISTER] =>", `[${method}]`, path);
      });
    }
  }

  public listen() {
    this.app.listen(this.port, () => {
      Logger.log(`[SERVER] => started in PORT ${this.port}`);
    });
  }
}

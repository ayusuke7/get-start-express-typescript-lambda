import serveless from "serverless-http";
import { server } from "./app";

export const handler = async (event: any, context: any) => {
  const proxy = serveless(server.app, { binary: ["application/*", "image/*"] });
  const res = await proxy(event, context);
  return res;
};

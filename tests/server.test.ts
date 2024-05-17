import { AppServer } from "../app/server";

describe("[AppServerTest]", () => {
  let server: AppServer;

  beforeEach(() => {
    server = new AppServer([], 4444);
  });

  it("Should be created", () => {
    expect(server).toBeDefined();
  });
});

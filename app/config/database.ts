class Database {
  private connection: any;

  constructor() {
    this.connect();
  }

  private async connect(): Promise<void> {
    if (this.connection != null) return;

    /* set your client connection */
    this.connection = {};
  }

  private async disconnect(): Promise<void> {
    if (this.connection == null) return;
    // this.connection.close();
    this.connection = null;
  }
}

/* Singleton connection */
export default new Database();

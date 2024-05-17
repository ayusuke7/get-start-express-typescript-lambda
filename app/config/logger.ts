export class Logger {
  static log(...args: any) {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    console.log(`${date} ${time}`, ...args);
  }
}

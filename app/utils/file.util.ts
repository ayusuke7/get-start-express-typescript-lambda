import fs from "fs";
import path from "path";
import { Logger } from "../config/logger";

export class FileUtils {
  static importJsonFile(source: string) {
    const filePath = path.resolve(__dirname, source);
    const jsonFile = fs.readFileSync(filePath, "utf-8");
    const parser = JSON.parse(jsonFile);
    return parser;
  }

  static checkJsonFile(source: string): boolean {
    try {
      const filePath = path.resolve(__dirname, source);
      return fs.existsSync(filePath);
    } catch (error) {
      Logger.log(error);
    }

    return false;
  }

  static listFilesFromDir(source: string): string[] {
    try {
      const dirPath = path.resolve(__dirname, source);
      const files = fs.readdirSync(dirPath);
      return files;
    } catch (error) {
      Logger.log(error);
    }

    return [];
  }
}

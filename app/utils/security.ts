import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { TokenPayload } from "../@types/express";

export class Security {
  static hashEncrypt(text: string): string {
    const buffer = Buffer.from(text, "utf8");
    return buffer.toString("hex");
  }

  static hashDecrypt(encryptedText: string): string {
    const buffer = Buffer.from(encryptedText, "hex");
    return buffer.toString("utf8");
  }

  static isHashId(text: string): boolean {
    const hexRegex = /^[0-9A-Fa-f]+$/g;
    return hexRegex.test(text);
  }

  static signJWT(payload: TokenPayload, expiresIn: string = "1d") {
    return jwt.sign(payload, `${process.env.JWT_KEY}`, { expiresIn });
  }

  static verifyJWT(token: string): TokenPayload {
    return jwt.decode(token) as TokenPayload;
  }

  static encrypt(toEncrypt: string): string {
    return bcrypt.hashSync(toEncrypt);
  }

  static compare(hash: string, strToCompare: string): boolean {
    return bcrypt.compareSync(strToCompare, hash);
  }
}

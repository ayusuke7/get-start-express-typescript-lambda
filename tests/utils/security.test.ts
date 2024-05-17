import { Security } from "../../app/utils/security";

describe("[SecurityTest]", () => {
  it("Shoud be encrypt url for hash id based in HEX", () => {
    const url = "http://teste.com.br?any=1";

    expect(Security.hashEncrypt(url)).toEqual(
      "687474703a2f2f74657374652e636f6d2e62723f616e793d31"
    );
  });

  it("Shoud be decrypt hashIf for url valid", () => {
    const hashId = "687474703a2f2f74657374652e636f6d2e62723f616e793d31";
    expect(Security.hashDecrypt(hashId)).toEqual("http://teste.com.br?any=1");
  });

  it("Shoud be validate hash is hexcode and url valid", () => {
    const hashId = "687474703a2f2f74657374652e636f6d2e62723f616e793d31";
    expect(Security.isHashId(hashId)).toEqual(true);
  });

  it("Shoud be validate hash is not hexcode", () => {
    const hashId = "any_text_not_hex_code";
    expect(Security.isHashId(hashId)).toEqual(false);
  });
});

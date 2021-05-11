import * as crypto from "crypto";

const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export const getRandomString = (length: number) => {
  return Array.from(crypto.randomFillSync(new Uint8Array(length)))
    .map((n) => S[n % S.length])
    .join("");
};

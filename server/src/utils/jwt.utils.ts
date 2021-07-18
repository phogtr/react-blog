import jwt from "jsonwebtoken";

const privateKey = String(process.env.PRIVATE_KEY);

export function jwtSign(object: Object, options: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, options);
}

export function jwtDecode(token: string) {
  try {
    const decoded = jwt.verify(token, privateKey);
    return { valid: true, expired: false, decoded };
  } catch (error) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
}

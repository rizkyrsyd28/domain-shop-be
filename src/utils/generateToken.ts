import jwt from "jsonwebtoken";

export const generateToken = (userId: string): string => {
    const secret = process.env.JWT_SECRET as string;
    const token = jwt.sign({ userId }, secret, { expiresIn: "1h" });
    return token;
};

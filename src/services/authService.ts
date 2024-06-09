import bcrypt from "bcrypt";
import { getUserByEmail } from "../models/user";
import { generateToken } from "../utils/generateToken";

export const loginUser = async (
    email: string,
    password: string
): Promise<string> => {
    const user = getUserByEmail(email);
    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid email or password");
    }

    const token = generateToken(user.id);
    return token;
};

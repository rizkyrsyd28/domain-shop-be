import { Request, Response } from "express";
import { loginUser } from "../services/authService";

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const token = await loginUser(email, password);
        res.cookie("token", token, {
            httpOnly: true,
        });
        res.json({ message: "Login successful" });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: error });
    }
};

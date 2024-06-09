import { Request, Response } from "express";

export const getUserProfile = (req: Request, res: Response) => {
    const user = (req as any).user;
    res.json({ name: user.name, email: user.email });
};

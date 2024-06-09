import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { getUserById } from "../models/user";

interface AuthRequest extends Request {
    user?: {
        id: string;
        name: string;
        email: string;
    };
}

export const authenticateToken = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    const token = req.cookies.token;
    if (!token) return res.sendStatus(401);

    const secret = process.env.JWT_SECRET as string;
    jwt.verify(token, secret, (err: any, user: any) => {
        if (err) return res.sendStatus(403);
        const userData = getUserById((user as any).userId);
        if (!userData) return res.sendStatus(404);
        req.user = {
            id: userData.id,
            name: userData.name,
            email: userData.email,
        };
        next();
    });
};

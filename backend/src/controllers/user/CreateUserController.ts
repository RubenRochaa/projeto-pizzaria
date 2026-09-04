import { Request, response, Response } from "express";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        res.json({ ok: true })
    }
}

export { CreateUserController }
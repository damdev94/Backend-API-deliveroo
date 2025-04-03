import { Router } from "express";
import UberAuthService from "../../services/uber/uberAuth.service";
import { Request, Response } from 'express';

const router = Router();

router.get("/login",(req: Request, res: Response) => {
    console.log("Route /login appelée");
    // const authUrl = new UberAuthService().generateAuthUrl();
    // res.redirect(authUrl);
    res.send("OK");
})

export default router;
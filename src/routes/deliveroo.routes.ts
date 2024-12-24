import { Router } from "express";
import DeliverooService from "../services/deliveroo.service";

const router = Router();

router.get("/", async (req,res) => {
    try {
        const accessToken = await new DeliverooService().getAccessToken();
        res.status(200).json({ accessToken })
    } catch (err : any) {
        res.status(500).json({ message: err.message })
    }
})

export default router;
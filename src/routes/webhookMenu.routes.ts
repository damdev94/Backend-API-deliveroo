import { Router } from "express";
import WebhookMenuService from "../services/webhookMenu.service";

const router = Router();

router.post("/",(req, res) => {
    try {
        new WebhookMenuService(req.body)
        res.status(200).send("Menu update processed successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error processing menu update.");
    }
})

export default router;
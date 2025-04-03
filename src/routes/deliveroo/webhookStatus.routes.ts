import { Router } from "express";
import WebhookStatusService from "../../services/deliveroo/webhookStatus.service";

const router = Router();

router.post("/", (req,res) => {
    try {
        new WebhookStatusService(req.body)
        res.status(200).send("status update processed successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error processing menu update.");
    }
});

export default router;
import { Router } from "express";
import WebhookOrderService from "../../services/deliveroo/webhookOrder.service";

const router = Router();

router.post("/",(req, res) => {
    try {
        new WebhookOrderService(req.body)
        res.status(200).send("Order update processed successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error processing menu update.");
    }
})

export default router;
import { Router } from "express";
import WebhookMenuService from "../../services/deliveroo/webhookMenu.service";

const router = Router();

router.post("/",(req, res) => {
    try {
        console.log("📬 Webhook reçu de Deliveroo (menu):", JSON.stringify(req.body, null, 2));

    // Appelle ton service si tu veux faire un traitement
    new WebhookMenuService(req.body);

        res.status(200).send("Menu update processed successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error processing menu update.");
    }
})

export default router;
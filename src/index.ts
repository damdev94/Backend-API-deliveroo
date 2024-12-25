import express from "express";
import DeliverooRouter from "./routes/deliveroo.routes"
import RestaurantRouter from "./routes/restaurant.routes"
import WebhookMenuRouter from "./routes/webhookMenu.routes";
import WebhookOrderRouter from "./routes/webhookOrder.routes";
import WebhookStatusRouter from "./routes/webhookStatus.routes"

const app =  express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
app.use(express.json());

app.use("/", DeliverooRouter);
app.use("/restaurant", RestaurantRouter);

app.use("/webhook/menu", WebhookMenuRouter);
app.use("/webhook/order", WebhookOrderRouter);
app.use("/webhook/update-status", WebhookStatusRouter); 

app.listen(PORT, () => {
    console.log(`The server run on ${PORT}`);
});
import express from "express";

import UberAuthRouter from "./routes/uber/uberAuth.routes";

import DeliverooRouter from "./routes/deliveroo/deliveroo.routes";
import RestaurantRouter from "./routes/deliveroo/restaurant.routes";
import WebhookMenuRouter from "./routes/deliveroo/webhookMenu.routes";
import WebhookOrderRouter from "./routes/deliveroo/webhookOrder.routes";
import WebhookStatusRouter from "./routes/deliveroo/webhookStatus.routes"

const app =  express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
app.use(express.json());


//Uber
app.use("/uber", UberAuthRouter);

// Deliveroo
app.use("/deliveroo", DeliverooRouter);
app.use("/deliveroo/restaurant", RestaurantRouter);

app.use("/deliveroo/webhook/menu", WebhookMenuRouter);
app.use("/deliveroo/webhook/order", WebhookOrderRouter);
app.use("/deliveroo/webhook/update-status", WebhookStatusRouter); 

app.listen(PORT, () => {
    console.log(`The server run on ${PORT}`);
});
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deliveroo_routes_1 = __importDefault(require("./routes/deliveroo.routes"));
const restaurant_routes_1 = __importDefault(require("./routes/restaurant.routes"));
const webhookMenu_routes_1 = __importDefault(require("./routes/webhookMenu.routes"));
const webhookOrder_routes_1 = __importDefault(require("./routes/webhookOrder.routes"));
const webhookStatus_routes_1 = __importDefault(require("./routes/webhookStatus.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
app.use(express_1.default.json());
app.use("/", deliveroo_routes_1.default);
app.use("/restaurant", restaurant_routes_1.default);
app.use("/webhook/menu", webhookMenu_routes_1.default);
app.use("/webhook/order", webhookOrder_routes_1.default);
app.use("/webhook/update-status", webhookStatus_routes_1.default);
app.listen(PORT, () => {
    console.log(`The server run on ${PORT}`);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const webhookOrder_service_1 = __importDefault(require("../services/webhookOrder.service"));
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    try {
        new webhookOrder_service_1.default(req.body);
        res.status(200).send("Order update processed successfully.");
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Error processing menu update.");
    }
});
exports.default = router;

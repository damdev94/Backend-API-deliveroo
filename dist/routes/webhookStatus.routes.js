"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const webhookStatus_service_1 = __importDefault(require("../services/webhookStatus.service"));
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    try {
        new webhookStatus_service_1.default(req.body);
        res.status(200).send("status update processed successfully.");
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Error processing menu update.");
    }
});
exports.default = router;

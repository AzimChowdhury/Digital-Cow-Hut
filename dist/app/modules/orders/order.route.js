"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const order_validation_1 = require("./order.validation");
const router = express_1.default.Router();
// order a cow
router.post("/", (0, validateRequest_1.default)(order_validation_1.OrderValidation.orderZodSchema), order_controller_1.orderController.orderCow);
// get all orders
router.get("/", order_controller_1.orderController.getOrders);
exports.OrderRoutes = router;

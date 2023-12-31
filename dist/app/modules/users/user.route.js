"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// get single user
router.get("/:id", user_controller_1.UserController.getSingleUser);
// update user
router.patch("/:id", user_controller_1.UserController.updateUser);
// get all user
router.get("/", user_controller_1.UserController.getAllUsers);
// delete a user
router.delete("/:id", user_controller_1.UserController.deleteUser);
exports.UserRoutes = router;

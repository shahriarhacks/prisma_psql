import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create", UserController.insertIntoDB);
router.post("/profile", UserController.insertOrUpdateProfile);

router.get("/", UserController.getUsers);

export default router;

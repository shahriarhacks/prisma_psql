import express from "express";
import { CategoryController } from "./category.controller";

const router = express.Router();

router.post("/create", CategoryController.insertIntoDB);

export default router;

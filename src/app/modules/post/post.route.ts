import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/create", PostController.insertPostToDB);
router.get("/", PostController.findAllPost);

export default router;
 
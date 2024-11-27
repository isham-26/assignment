import express from "express";
import { progressGet, progressPost } from "../controllers/progress.js";

const router=express.Router();


router.post("/",progressPost);
router.get("/",progressGet);


export default router;
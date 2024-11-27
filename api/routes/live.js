import express from "express";
import { liveGet, livePost } from "../controllers/live.js";

const router=express.Router();

router.post("/",livePost);
router.get("/",liveGet);


export default router;
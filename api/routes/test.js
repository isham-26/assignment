import express from "express";
import { testGet, testPost } from "../controllers/test.js";

const router=express.Router();


router.post("/",testPost);
router.get("/",testGet);



export default router;